import { EyeOff, Maximize } from "lucide-react";
import icon from "@/assets/icon.png";

export function EmbedBar({
  hidden,
  onHide,
  onShow: _onShow,
  onFullscreen,
  gameName,
}: {
  hidden: boolean;
  onHide: () => void;
  onShow: () => void;
  onFullscreen: () => void;
  gameName: string;
}) {
  if (hidden) {
    return null;
  }

  return (
    <div className="relative z-50 flex shrink-0 items-center border-t border-border/70 bg-card px-4 py-2">
      <img
        src={icon}
        alt="GeoWorld"
        width={512}
        height={512}
        loading="lazy"
        className="h-7 w-7 shrink-0"
      />

      <span className="sr-only">{gameName}</span>

      <div className="absolute left-1/2 flex -translate-x-1/2 items-center">
        <button
          type="button"
          onClick={onHide}
          className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
          Hide this bar
        </button>
      </div>

      <button
        type="button"
        onClick={onFullscreen}
        aria-label="Play in fullscreen"
        className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Maximize className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}

export default EmbedBar;