import { Link } from "@tanstack/react-router";
import { Expand, Sparkles } from "lucide-react";

export function FeaturedGame({
  name,
  embedUrl,
  slug,
}: {
  name: string;
  embedUrl: string;
  slug: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-16 pt-8" aria-labelledby="featured-heading">

      <div className="overflow-hidden rounded-3xl border border-border/70 bg-card/70 backdrop-blur">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
          <iframe
            src={embedUrl}
            title={`${name} game player`}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; gamepad; clipboard-write"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedGame;
