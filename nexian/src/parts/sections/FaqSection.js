import Accordion from "@/parts/components/Accordion";

/**
 * Sección de preguntas frecuentes en acordeón.
 * @param {string} title Título de la sección.
 * @param {string} description Texto introductorio.
 * @param {Array} items Preguntas: { id, title, content }.
 * @param {number} width Ancho del texto introductorio (clase width-N).
 */
export default function FaqSection({ title = "Preguntas Frecuentes", description, items, width = 5 }) {
  return (
    <section className="section section-faq section-faq-hosting">
      <h2 className="section-title">{title}</h2>
      <div className="section-small">
        <p className={`font-size-medium width-${width}`}>{description}</p>
      </div>
      <div className="faq-container faq-hosting">
        <Accordion items={items} />
      </div>
    </section>
  );
}
