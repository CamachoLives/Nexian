import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";

export const ContactSupportCardsData = [
  {
    id: 1,
    title: 'Servicios y Soluciones',
    icon: '/images/icons/knowledgebase.svg',
    content: 'Conoce en detalle nuestros servicios de desarrollo web, seguridad, optimización e integraciones.',
    url: ROUTES.servicios,
    buttonText: 'Ver Servicios'
  },
  {
    id: 2,
    title: 'Abrir Ticket de Soporte',
    icon: '/images/icons/support.svg',
    content: '¿Tienes un problema o necesitas ayuda con tu proyecto? Abre un ticket y te responderé a la brevedad.',
    url: `${siteConfig.contact.emailHref}?subject=${encodeURIComponent('Ticket de soporte')}`,
    buttonText: 'Abrir Ticket'
  },
  {
    id: 3,
    title: 'Contacto Directo',
    icon: '/images/icons/network.svg',
    content: '¿Prefieres hablar directamente? Escríbeme por WhatsApp y conversamos sobre tu proyecto.',
    url: siteConfig.contact.whatsapp,
    buttonText: 'Escribir por WhatsApp'
  }
];
