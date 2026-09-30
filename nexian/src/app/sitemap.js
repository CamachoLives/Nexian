import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";

// Las páginas legales cambian muy poco y no aportan tráfico de búsqueda.
const LEGAL_ROUTES = [ROUTES.terminos, ROUTES.reembolso, ROUTES.privacidad];

// Portadas de sección: son las que concentran los enlaces internos.
const SECTION_ROUTES = [ROUTES.servicios, ROUTES.integraciones];

/** Prioridad y frecuencia según el papel de la página en el sitio. */
function rank(path) {
  if (path === ROUTES.inicio) return { priority: 1, changeFrequency: "weekly" };
  if (LEGAL_ROUTES.includes(path)) return { priority: 0.3, changeFrequency: "yearly" };
  if (SECTION_ROUTES.includes(path)) return { priority: 0.9, changeFrequency: "weekly" };
  return { priority: 0.7, changeFrequency: "monthly" };
}

export default function sitemap() {
  const lastModified = new Date();

  return Object.values(ROUTES).map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    ...rank(path),
  }));
}
