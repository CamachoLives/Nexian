import { ROUTES } from "@/config/routes";

export const HostingServicesData = [
  {
    id: 1,
    name: 'Automatizaciones',
    info: 'Automatiza tus procesos y aumenta la eficiencia de tu negocio.',
    image: '/images/icons/web-hosting.svg',
    url: ROUTES.automatizacion
  },
    {
    id: 2,
    name: 'Software a la Medida',
    info: 'Desarrolla soluciones personalizadas que se adapten a las necesidades específicas de tu empresa.',
    image: '/images/icons/reseller-hosting.svg',
    url: ROUTES.softwareMedida
  },
  {
    id: 3,
    name: 'CMS Hosting',
    info: 'Soluciones de hosting optimizadas para la gestión de contenido.',
    image: '/images/icons/wp-hosting.svg',
    url: ROUTES.optimizacion
  },
  {
    id: 4,
    name: 'IA',
    info: 'Implementa soluciones de inteligencia artificial para automatizar y mejorar tus procesos.',
    image: '/images/icons/kvm-vps.svg',
    url: ROUTES.inteligenciaArtificial
  },
  {
    id: 5,
    name: 'Optimizaciones',
    info: 'Optimiza el rendimiento de tus aplicaciones y servicios.',
    image: '/images/icons/storage-vps.svg',
    url: ROUTES.optimizacion
  },
  {
    id: 6,
    name: 'Seguridad',
    info: 'Protege tu infraestructura y datos con soluciones de seguridad avanzadas.',
    image: '/images/icons/dedicaed-server.svg',
    url: ROUTES.seguridad
  }
];