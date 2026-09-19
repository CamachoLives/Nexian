import { ROUTES } from "@/config/routes";

// Redirecciones permanentes (308) resueltas por src/proxy.js.
// Clave: ruta entrante (en minúsculas y sin "/" final). Valor: ruta canónica.
export const REDIRECTS = {
  // Rutas heredadas de la plantilla original.
  "/hosting": ROUTES.servicios,
  "/hosting/web-hosting": ROUTES.optimizacion,
  "/hosting/reseller-hosting": ROUTES.paginasWeb,
  "/hosting/wordpress-hosting": ROUTES.softwareMedida,
  "/vps": ROUTES.integraciones,
  "/vps/kvm-vps": ROUTES.inteligenciaArtificial,
  "/vps/managed-vps": ROUTES.seguridad,
  "/vps/storage-vps": ROUTES.automatizacion,
  "/dedicated": ROUTES.desarrollo,
  "/support": ROUTES.soporte,
  "/contact": ROUTES.contacto,
  "/about": ROUTES.nosotros,
  "/terms": ROUTES.terminos,
  "/refund": ROUTES.reembolso,
  "/privacy": ROUTES.privacidad,

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
