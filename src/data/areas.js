export const areas = [
  {
    slug: "inner-brisbane",
    name: "Inner Brisbane",
    suburbs: [
      "CBD",
      "Fortitude Valley",
      "New Farm",
      "Teneriffe",
      "Kangaroo Point",
      "South Bank",
      "West End",
      "Paddington",
    ],
  },
  {
    slug: "northside",
    name: "Northside",
    suburbs: [
      "Chermside",
      "Nundah",
      "Ascot",
      "Hamilton",
      "Clayfield",
      "Kedron",
      "Aspley",
      "Brisbane Airport",
    ],
  },
  {
    slug: "southside",
    name: "Southside",
    suburbs: [
      "Mount Gravatt",
      "Sunnybank",
      "Carindale",
      "Holland Park",
      "Annerley",
      "Yeronga",
      "Coorparoo",
    ],
  },
  {
    slug: "bayside",
    name: "Bayside",
    suburbs: ["Wynnum", "Manly", "Lota", "Cleveland", "Capalaba", "Victoria Point", "Redland Bay"],
  },
  {
    slug: "western-suburbs",
    name: "Western Suburbs",
    suburbs: ["Kenmore", "Indooroopilly", "Chapel Hill", "Fig Tree Pocket", "Ipswich", "Springfield"],
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    suburbs: ["Southport", "Surfers Paradise", "Broadbeach", "Burleigh Heads", "Robina", "Helensvale"],
  },
];

export function getAreaBySlug(slug) {
  return areas.find((a) => a.slug === slug) ?? null;
}
