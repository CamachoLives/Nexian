import { ROUTES } from "@/config/routes";

export const HeaderNavData = [
  {
    label: "Servicios",
    href: ROUTES.servicios,
    children: [
      { label: "Optimización en tu página", href: ROUTES.optimizacion },
      { label: "Creación de Sitios Web", href: ROUTES.paginasWeb },
      { label: "Software a la Medida", href: ROUTES.softwareMedida },
    ],
  },
  {
    label: "Integraciones",
    href: ROUTES.integraciones,
    children: [
      { label: "IA", href: ROUTES.inteligenciaArtificial },
      { label: "Seguridad", href: ROUTES.seguridad },
      { label: "Automatización", href: ROUTES.automatizacion },
    ],
  },
  { label: "Desarrollo", href: ROUTES.desarrollo },
  { label: "Soporte", href: ROUTES.soporte },
  { label: "Contacto", href: ROUTES.contacto },
];
