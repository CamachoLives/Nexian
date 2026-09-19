import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";

export default function sitemap() {
  const lastModified = new Date();

  return Object.values(ROUTES).map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: path === ROUTES.inicio ? 1 : 0.7,
  }));
}
