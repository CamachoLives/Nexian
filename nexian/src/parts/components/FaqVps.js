import { FaqHostingData } from "@/data/components/FaqHostingData";
import Accordion from "./Accordion";

export default function FaqHosting() {
  return (
    <section className="section section-faq section-faq-hosting">
      <h2 className="section-title">Preguntas Frecuentes</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Resuelve tus dudas sobre los servicios de desarrollo, seguridad, optimización e integraciones que ofrezco.</p>
      </div>
      <div className="faq-container faq-hosting">
        <Accordion items={FaqHostingData} />
      </div>
    </section>
  );
}