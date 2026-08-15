import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";

export function GameCard({
  name,
  thumbnail,
  slug,
}: {
  name: string;
  thumbnail: string;
  slug: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border/70 bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
      <Link
        to="/game/$gameSlug"
        params={{ gameSlug: slug }}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Open ${name}`}
      >
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={thumbnail}
            alt={`${name} thumbnail`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
    </article>
  );
}

export default GameCard;
