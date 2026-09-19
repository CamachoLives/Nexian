// Datos globales del sitio. Cambiar aquí se refleja en header, footer y contacto.
const whatsappNumber = "573148917721";

export const siteConfig = {
  name: "Nexian",
  legalName: "Nexian Soluciones",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexian.vercel.app",
  description:
    "Transformamos código en soluciones de alto impacto. Elevamos tu rendimiento y garantizamos la integridad de tus datos con seguridad avanzada.",
  locale: "es_CO",
  contact: {
    email: "rfcamacris@gmail.com",
    phone: "+57 314 891 7721",
    phoneHref: `tel:+${whatsappNumber}`,
    whatsapp: `https://wa.me/${whatsappNumber}`,
  },
  social: {
    linkedin: "https://www.linkedin.com/in/cristiancamacho2004/",
  },
};
