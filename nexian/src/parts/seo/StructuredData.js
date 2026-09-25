import { siteConfig } from "@/config/site";

/**
 * Datos estructurados schema.org de la organización y del sitio.
 * Ayudan a Google a mostrar el nombre, el logo y los datos de contacto.
 */
export default function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organizacion`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: new URL("/images/svg.svg", siteConfig.url).toString(),
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    areaServed: "CO",
    sameAs: [siteConfig.social.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      availableLanguage: ["es"],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#sitio`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "es",
    publisher: { "@id": organization["@id"] },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [organization, website] }),
      }}
    />
  );
}
