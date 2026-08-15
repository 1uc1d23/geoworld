import { Library } from "lucide-react";
import { GameCard } from "./GameCard";
import GDText from "./GDText";

type Item = { name: string; thumbnail: string; slug: string };

export function GameGrid({ games, title }: { games: Item[]; title?: string }) {
  return (
    <section
      aria-labelledby="games-heading"
      className="mx-auto w-full max-w-6xl px-16 py-10"
    >
      <div className="mb-6 flex items-center gap-2">
        <Library
          className="h-5 w-5 text-primary"
          aria-hidden="true"
        />

        <div id="games-heading">
          <GDText
            text={title ?? "All Games"}
            size={128}
            className="h-6 w-auto"
          />
        </div>
      </div>

      {games.length === 0 ? (
        <p className="rounded-lg border border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
          No games found. Try a different search.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
          {games.map((g) => (
            <GameCard key={g.slug} {...g} />
          ))}
        </div>
      )}
    </section>
  );
}

export default GameGrid;