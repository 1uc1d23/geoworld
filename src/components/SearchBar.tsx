import { Search } from "lucide-react";
import GDText from "./GDText";

export function SearchBar({
  value,
  onChange,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex justify-end ${className}`}>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50"
          aria-hidden="true"
        />

        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search games by name"
          placeholder=""
          className="h-10 w-auto rounded-full bg-card/60 pl-9 pr-4 text-sm text-foreground outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60"
        />

        {!value && (
          <div className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2">
            <GDText
              text="Search"
              size={64}
              className="h-4 w-auto opacity-50"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;