import { Link } from "@tanstack/react-router";
import { Gamepad2 } from "lucide-react";
import footerImg from "@/assets/footer.png";
import { gamesWithSlug } from "@/data/games";

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border/70">
      <div className="absolute inset-0 bg-background/70" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-32 px-4 py-12 sm:grid-cols-[0.7fr_3.3fr]">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-heading text-foreground">
            <img
              src={footerImg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-auto object-cover"
            />
          </h2>
        </div>

        <nav aria-label="Games">
          <h3 className="text-sm font-heading tracking-expanded text-foreground">GAMES</h3>

          <ul className="mt-3 grid grid-cols-3 gap-x-8 gap-y-2 text-sm">
            {gamesWithSlug.map((g) => (
              <li key={g.slug}>
                <Link
                  to="/game/$gameSlug"
                  params={{ gameSlug: g.slug }}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {g.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;