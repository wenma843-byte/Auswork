import { SITE } from "@/data/site";
import { services } from "@/data/services";

export default function sitemap() {
  const staticPages = [
    "",
    "/services",
    "/reviews",
    "/memberships",
    "/contact",
    "/areas",
  ];

  const servicePages = services.map((service) => `/services/${service.slug}`);

  return [...staticPages, ...servicePages].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
