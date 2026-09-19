import PageHeader from "@/parts/components/PageHeader";
import VpsTypes from "@/parts/components/VpsTypes";
import FeaturesVps from "@/parts/components/FeaturesVps";
import Testimonial from "@/parts/components/Testimonial";
import ActionCardVps from "@/parts/components/ActionCardVps";

export const metadata = {
  title: "Integraciones | IA, Automatizaciones y Seguridad",
  description: "Integra inteligencia artificial, automatiza procesos y refuerza la seguridad de tu negocio con soluciones tecnológicas avanzadas y personalizadas.",
};

export default function Integraciones(){
  return(
    <main className="main">
      <article>
        <PageHeader
          title="Integraciones Avanzadas"
          description="Potencia tu negocio con integraciones de inteligencia artificial, automatización de procesos y soluciones de seguridad diseñadas para trabajar juntas y darte ventaja competitiva."
          highlights={[
            "Inteligencia Artificial",
            "Automatización de Procesos",
            "Seguridad Avanzada",
            "APIs e Integraciones",
            "Chatbots y Asistentes",
            "Monitoreo Continuo",
          ]}
        />
        <section className="content">
          <div className="container">
            <div className="content-container">
              <VpsTypes />
              <FeaturesVps />
              <Testimonial />
              <ActionCardVps />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}