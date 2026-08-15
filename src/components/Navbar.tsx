import { Link } from "@tanstack/react-router";
import logo from "@/assets/long_logo.png";
import { SearchBar } from "./SearchBar";

export function Navbar({
  query,
  onQueryChange,
}: {
  query?: string;
  onQueryChange?: (v: string) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:gap-6"
      >
        <Link
          to="/"
          className="shrink-0 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="GeoWorld home"
        >
          <img
            src={logo}
            alt="GeoWorld logo"
            width={1536}
            height={512}
            className="h-8 w-auto sm:h-9"
          />
        </Link>
        {onQueryChange && (
          <SearchBar
            value={query ?? ""}
            onChange={onQueryChange}
            className="ml-auto w-full max-w-xs sm:max-w-sm"
          />
        )}
      </nav>
    </header>
  );
}

export default Navbar;
