/**
 * Services structure: Residential and Commercial window cleaning.
 * slug is used in URLs: /services/[slug]
 */
export const windowSpecialties = [
  { slug: "interior-windows", title: "Interior Windows" },
  { slug: "exterior-windows", title: "Exterior Windows" },
  { slug: "track-cleaning", title: "Track Cleaning" },
  { slug: "screen-cleaning", title: "Screen Cleaning" },
  { slug: "pool-glass-cleaning", title: "Pool Glass Cleaning" },
];

export const serviceCategories = [
  {
    key: "residential",
    label: "Residential",
    services: [
      {
        slug: "residential-window-cleaning",
        title: "Window cleaning",
        description:
          "Professional window cleaning for homes. We use pure-water poles and streak-free methods to leave your glass crystal clear. Interior and exterior, tracks, frames and flyscreens included as standard.",
      },
    ],
  },
  {
    key: "commercial",
    label: "Commercial",
    services: [
      {
        slug: "commercial-window-cleaning",
        title: "Window cleaning",
        description:
          "Professional window cleaning for commercial properties. We handle multi-storey buildings, shopfronts, and office blocks with safe, efficient methods and minimal disruption to your business.",
      },
    ],
  },
];

/** Flattened list for sitemap, About Us, etc. */
export const services = serviceCategories.flatMap((cat) =>
  cat.services.map((s) => ({ ...s, category: cat.key, key: cat.key }))
);

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}
