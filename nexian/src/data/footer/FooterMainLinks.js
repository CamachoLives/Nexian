import { ROUTES } from "@/config/routes";

export const FooterMainLinks = [
  {
    id: 1,
    title: "Servicios",
    links: [
      { id: 1, label: "Software a la Medida", href: ROUTES.softwareMedida },
      { id: 2, label: "Landing Pages & Web", href: ROUTES.paginasWeb },
      { id: 3, label: "Automatización e IA", href: ROUTES.automatizacion },
    ],
  },
  {
    id: 2,
    title: "Ciberseguridad",
    links: [
      { id: 1, label: "Mitigación de Vulnerabilidades", href: ROUTES.seguridad },
      { id: 2, label: "Inteligencia Artificial", href: ROUTES.inteligenciaArtificial },
      { id: 3, label: "Optimización de Rendimiento", href: ROUTES.optimizacion },
    ],
  },
  {
    id: 3,
    title: "Compañía",
    links: [
      { id: 1, label: "Sobre Nosotros", href: ROUTES.nosotros },
      { id: 2, label: "Soporte", href: ROUTES.soporte },
      { id: 3, label: "Contacto", href: ROUTES.contacto },
    ],
  },
];
