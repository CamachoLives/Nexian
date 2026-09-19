import { ROUTES } from "@/config/routes";

export const HostingTypesData = [
  {
    id: 1,
    title: 'Desarrollo Web',
    image: '/images/icons/web-hosting.svg',
    intro: 'Sitios web y aplicaciones a medida, construidos con tecnologías modernas y código limpio.',
    url: ROUTES.paginasWeb
  },
  {
    id: 2,
    title: 'Seguridad Web',
    image: '/images/icons/reseller-hosting.svg',
    intro: 'Auditorías, detección de vulnerabilidades y protección activa para mantener tu sitio seguro.',
    url: ROUTES.seguridad
  },
  {
    id: 3,
    title: 'Optimización y CMS',
    image: '/images/icons/wp-hosting.svg',
    intro: 'Mejora el rendimiento de tu sitio y gestiona tu contenido con WordPress, Prestashop y más.',
    url: ROUTES.optimizacion
  }
];