import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FeaturedGame } from "@/components/FeaturedGame";
import { GameGrid } from "@/components/GameGrid";
import { SEOInfo } from "@/components/SEOInfo";
import { Footer } from "@/components/Footer";
import { FEATURED_SLUG, gamesWithSlug, getGameBySlug } from "@/data/games";

const title = "GeoWorld — Play Geometry Dash World Online Free";
const description =
  "Play Geometry Dash World and more Geometry Dash games free in your browser on GeoWorld. No downloads, no installs — instant rhythm platformer action.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "google-site-verification",
        content: "5cYjAiwY3M53_WWlk8vm7ektsbCilvmGEV22DD-X_JQ",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-gameplay.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-gameplay.png" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const featured = getGameBySlug(FEATURED_SLUG) ?? gamesWithSlug[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return gamesWithSlug.filter((g) => g.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen">
      <Navbar query={query} onQueryChange={setQuery} />

      {featured && (
        <FeaturedGame
          name={featured.name}
          embedUrl={`/embed/${featured.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          slug={featured.slug}
        />
      )}

      <div id="games">
        <GameGrid games={filtered} title="All Games" />
      </div>

      <SEOInfo />
      <Footer />
    </div>
  );
}

export default Index;