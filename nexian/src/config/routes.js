// Fuente única de verdad para las rutas internas del sitio.
// Los componentes y datos deben usar estas constantes en lugar de strings sueltos.
export const ROUTES = {
  inicio: "/",

  servicios: "/servicios",
  optimizacion: "/servicios/optimizacion",
  paginasWeb: "/servicios/paginas-web",
  softwareMedida: "/servicios/desarrollo-software",

  integraciones: "/integraciones",
  inteligenciaArtificial: "/integraciones/inteligencia-artificial",
  seguridad: "/integraciones/seguridad",
  automatizacion: "/integraciones/automatizacion",

  desarrollo: "/desarrollo",
  soporte: "/soporte",
  contacto: "/contacto",
  nosotros: "/nosotros",

  terminos: "/terminos",
  reembolso: "/reembolso",
  privacidad: "/privacidad",
};

// Etiquetas legibles por ruta, usadas en el breadcrumb y el sitemap.
export const ROUTE_LABELS = {
  [ROUTES.inicio]: "Inicio",
  [ROUTES.servicios]: "Servicios",
  [ROUTES.optimizacion]: "Optimización",
  [ROUTES.paginasWeb]: "Páginas Web",
  [ROUTES.softwareMedida]: "Software a la Medida",
  [ROUTES.integraciones]: "Integraciones",
  [ROUTES.inteligenciaArtificial]: "Inteligencia Artificial",
  [ROUTES.seguridad]: "Seguridad",
  [ROUTES.automatizacion]: "Automatización",
  [ROUTES.desarrollo]: "Desarrollo",
  [ROUTES.soporte]: "Soporte",
  [ROUTES.contacto]: "Contacto",
  [ROUTES.nosotros]: "Nosotros",
  [ROUTES.terminos]: "Términos y Condiciones",
  [ROUTES.reembolso]: "Política de Reembolso",
  [ROUTES.privacidad]: "Política de Privacidad",
};
