export type City = { slug: string; name: string; area: string };

// The Phoenix-area cities Mint serves in person, grouped the way locals describe the Valley.
export const cities: City[] = [
  { slug: "phoenix", name: "Phoenix", area: "Central Phoenix" },
  { slug: "scottsdale", name: "Scottsdale", area: "East Valley" },
  { slug: "mesa", name: "Mesa", area: "East Valley" },
  { slug: "tempe", name: "Tempe", area: "East Valley" },
  { slug: "chandler", name: "Chandler", area: "East Valley" },
  { slug: "gilbert", name: "Gilbert", area: "East Valley" },
  { slug: "glendale", name: "Glendale", area: "West Valley" },
  { slug: "peoria", name: "Peoria", area: "West Valley" },
  { slug: "goodyear", name: "Goodyear", area: "West Valley" },
];

export const cityNames = cities.map((c) => c.name);

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug) ?? null;
}

/** "A, B and C" */
export function listNames(names: string[]) {
  return names.length < 2 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;
}
