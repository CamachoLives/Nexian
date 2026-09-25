import PageHeader from "@/parts/components/PageHeader";
import VpsTypes from "@/parts/components/VpsTypes";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesIntegracionesData } from "@/data/components/FeaturesIntegracionesData";
import Testimonial from "@/parts/components/Testimonial";
import ActionCard from "@/parts/components/ActionCard";

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
              <FeatureCards
                title="¿Por Qué Integrar Estas Soluciones?"
                description="La IA, la automatización y la seguridad no son el futuro, son el presente. Integrarlas en tu negocio hoy marca la diferencia frente a tu competencia."
                features={FeaturesIntegracionesData}
                width={6}
              />
              <Testimonial />
              <ActionCard />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}