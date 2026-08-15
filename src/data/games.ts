import gamesJson from "./games.json";

export type Game = {
  name: string;
  thumbnail: string;
  embed_url: string;
};

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const games: Game[] = gamesJson as Game[];

export const gamesWithSlug = games.map((g) => ({ ...g, slug: slugify(g.name) }));

export const FEATURED_SLUG = "geometry-dash-world";

export const getGameBySlug = (slug: string) =>
  gamesWithSlug.find((g) => g.slug === slug);
