import { FaqIntegracionesData } from "@/data/components/FaqIntegracionesData";
import Accordion from "./Accordion";

export default function FaqVps() {
  return (
    <section className="section section-faq section-faq-hosting">
      <h2 className="section-title">Preguntas Frecuentes</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Resuelve tus dudas sobre integraciones de inteligencia artificial, automatización de procesos y seguridad.</p>
      </div>
      <div className="faq-container faq-hosting">
        <Accordion items={FaqIntegracionesData} />
      </div>
    </section>
  );
}
