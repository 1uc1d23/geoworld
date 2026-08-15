import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  Gamepad2,
  Globe,
  Sparkles,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SEOInfo } from "@/components/SEOInfo";
import { Footer } from "@/components/Footer";
import { GameGrid } from "@/components/GameGrid";
import { getGameBySlug, gamesWithSlug } from "@/data/games";
import GDText from "@/components/GDText";

export const Route = createFileRoute("/game/$gameSlug")({
  head: ({ params }) => {
    const game = getGameBySlug(params.gameSlug);

    if (!game) {
      return {
        meta: [
          { title: "Game not found — GeoWorld" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const title = `${game.name} — Play Free Online | GeoWorld`;
    const description = `Play ${game.name} online for free on GeoWorld. Instant browser gameplay, no downloads or installs required.`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/game/${params.gameSlug}` },
        { property: "og:image", content: "/og-gameplay.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "/og-gameplay.png" },
      ],
      links: [{ rel: "canonical", href: `/game/${params.gameSlug}` }],
    };
  },
  component: GamePage,
});

function GamePage() {
  const { gameSlug } = Route.useParams();
  const game = getGameBySlug(gameSlug);

  if (!game) {
    return (
      <div className="min-h-screen">
        <Navbar />

        <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
          <h1 className="text-5xl font-extrabold text-foreground">404</h1>

          <p className="mt-3 text-sm text-muted-foreground">
            We couldn't find that game. It may have been moved or renamed.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  const others = gamesWithSlug.filter((g) => g.slug !== game.slug);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-16 pt-8">
        <section aria-labelledby="game-heading">
          <div className="overflow-hidden">
            {/* Game player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <iframe
                src={`/embed/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
                title={`${game.name} game player`}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; gamepad; clipboard-write"
                allowFullScreen
              />
            </div>

            {/* Game information */}
            <div className="mt-6">
              <GDText
                text={game.name}
                size={128}
                className="h-8 w-auto"
              />

              {/* Tags */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary/80">
                  <Zap className="h-3.5 w-3.5" />
                  Play Now
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground/80">
                  <Globe className="h-3.5 w-3.5" />
                  Browser Game
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground/80">
                  <Gamepad2 className="h-3.5 w-3.5" />
                  Free To Play
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground/80">
                  <Sparkles className="h-3.5 w-3.5" />
                  No Download
                </span>
              </div>

              {/* Description */}
              <div className="mt-3 max-w-4xl">
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Play {game.name} online for free on GeoWorld. Jump straight
                  into the game from your browser with no downloads or
                  installations required. Experience the fast-paced gameplay,
                  challenging levels, precise controls, and exciting action
                  that make {game.name} a fun game to play anytime.
                </p>
              </div>

              <div className="mt-6 h-[0.5px] w-full bg-border/70" />
            </div>
          </div>
        </section>
      </main>

      <GameGrid games={others} title="More games" />

      <SEOInfo />

      <Footer />
    </div>
  );
}

export default GamePage;