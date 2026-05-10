import { FaqDedicatedData } from "@/data/components/FaqDedicatedData";
import Accordion from "./Accordion";

export default function FaqDedicated() {
  return(
    <section className="section section-faq section-faq-hosting">
      <h2 className="section-title">Preguntas Frecuentes</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Encuentra respuestas rápidas a las preguntas más comunes sobre mis servicios de desarrollo, seguridad y optimización web.</p>
      </div>
      <div className="faq-container faq-hosting">
        <Accordion items={FaqDedicatedData} />
      </div>
    </section>
  );
}