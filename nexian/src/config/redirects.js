import { ROUTES } from "@/config/routes";

// Redirecciones permanentes (308) resueltas por src/proxy.js.
// Clave: ruta entrante (en minúsculas y sin "/" final). Valor: ruta canónica.
export const REDIRECTS = {
  // Alias en español que se usaron en enlaces antiguos del sitio.
  "/servicios/desarrollo-a-medida": ROUTES.softwareMedida,
  "/servicios/desarrollo-web": ROUTES.paginasWeb,
  "/servicios/optimizacion-cms": ROUTES.optimizacion,
  "/servicios/seguridad": ROUTES.seguridad,
  "/servicios/seguridad-web": ROUTES.seguridad,
  "/servicios/seguridad-informatica": ROUTES.seguridad,
  "/servicios/parches": ROUTES.seguridad,
  "/servicios/automatizacion": ROUTES.automatizacion,
  "/integraciones/automatizaciones": ROUTES.automatizacion,
};
