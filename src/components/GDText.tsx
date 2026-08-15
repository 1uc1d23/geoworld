import { useEffect, useRef } from "react";

type GDTextProps = {
  text: string;
  size?: number;
  className?: string;
};

type Glyph = {
  x: number;
  y: number;
  width: number;
  height: number;
  xoffset: number;
  yoffset: number;
  xadvance: number;
};

export default function GDText({
  text,
  size = 64,
  className = "",
}: GDTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const response = await fetch("/gjFont00-uhd.fnt");
      const fnt = await response.text();

      const glyphs: Record<number, Glyph> = {};

      for (const line of fnt.split("\n")) {
        if (!line.startsWith("char ")) continue;

        const get = (name: string) => {
          const match = line.match(new RegExp(`${name}=(-?\\d+)`));
          return match ? Number(match[1]) : 0;
        };

        const id = get("id");

        glyphs[id] = {
          x: get("x"),
          y: get("y"),
          width: get("width"),
          height: get("height"),
          xoffset: get("xoffset"),
          yoffset: get("yoffset"),
          xadvance: get("xadvance"),
        };
      }

      const image = new Image();
      image.src = "/gjFont00-uhd.png";

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = () => reject(new Error("Failed to load GD font"));
      });

      if (cancelled || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const scale = size / 128;

      let width = 0;

      for (const char of text) {
        const glyph = glyphs[char.codePointAt(0)!];

        if (glyph) {
          width += glyph.xadvance * scale;
        }
      }

      canvas.width = Math.ceil(width);
      canvas.height = Math.ceil(130 * scale);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let x = 0;

      for (const char of text) {
        const glyph = glyphs[char.codePointAt(0)!];

        if (!glyph) continue;

        ctx.drawImage(
          image,

          glyph.x,
          glyph.y,
          glyph.width,
          glyph.height,

          x + glyph.xoffset * scale,
          glyph.yoffset * scale,
          glyph.width * scale,
          glyph.height * scale
        );

        x += glyph.xadvance * scale;
      }
    }

    render().catch(console.error);

    return () => {
      cancelled = true;
    };
  }, [text, size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "block",
        imageRendering: "auto",
      }}
    />
  );
}