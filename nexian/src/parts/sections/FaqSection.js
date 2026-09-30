import Accordion from "@/parts/components/Accordion";

/**
 * Sección de preguntas frecuentes en acordeón.
 * Emite además el JSON-LD FAQPage de las preguntas, que es lo que Google
 * necesita para mostrarlas desplegables en los resultados de búsqueda.
 * @param {string} title Título de la sección.
 * @param {string} description Texto introductorio.
 * @param {Array} items Preguntas: { id, title, content }.
 * @param {number} width Ancho del texto introductorio (clase width-N).
 */
export default function FaqSection({ title = "Preguntas Frecuentes", description, items, width = 5 }) {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items
      // Solo las respuestas de texto plano sirven para el dato estructurado.
      .filter((item) => typeof item.content === "string")
      .map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: { "@type": "Answer", text: item.content },
      })),
  };

  return (
    <section className="section section-faq section-faq-hosting">
      <h2 className="section-title">{title}</h2>
      <div className="section-small">
        <p className={`font-size-medium width-${width}`}>{description}</p>
      </div>
      <div className="faq-container faq-hosting">
        <Accordion items={items} />
      </div>
      {faqPage.mainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
      )}
    </section>
  );
}
