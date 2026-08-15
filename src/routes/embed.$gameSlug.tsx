import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { EmbedBar } from "@/components/EmbedBar";
import { getGameBySlug } from "@/data/games";

export const Route = createFileRoute("/embed/$gameSlug")({
  head: ({ params }) => {
    const game = getGameBySlug(params.gameSlug);
    const title = game
      ? `Play ${game.name} — GeoWorld`
      : "Game not found — GeoWorld";

    return {
      meta: [
        { title },
        {
          name: "description",
          content: game
            ? `Play ${game.name} fullscreen in your browser on GeoWorld.`
            : "This game could not be found on GeoWorld.",
        },
        { property: "og:title", content: title },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: EmbedPage,
});

function EmbedPage() {
  const { gameSlug } = Route.useParams();
  const game = getGameBySlug(gameSlug);

  const [barHidden, setBarHidden] = useState(false);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = async () => {
    const el = fullscreenRef.current;
    if (!el) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen failed:", error);
    }
  };

  if (!game) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
        <h1 className="text-5xl font-extrabold text-foreground">404</h1>

        <p className="mt-3 text-sm text-muted-foreground">
          That game doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={fullscreenRef}
      className="flex h-screen w-screen flex-col overflow-hidden bg-black"
    >
      <div className="relative min-h-0 flex-1 bg-black">
        <iframe
          src={game.embed_url}
          title={`${game.name} full screen player`}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; gamepad; clipboard-write"
          allowFullScreen
        />
      </div>

      <EmbedBar
        gameName={game.name}
        hidden={barHidden}
        onHide={() => setBarHidden(true)}
        onShow={() => setBarHidden(false)}
        onFullscreen={toggleFullscreen}
      />
    </div>
  );
}