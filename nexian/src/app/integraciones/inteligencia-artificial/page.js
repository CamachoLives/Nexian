import PageHeader from "@/parts/components/PageHeader";
import PricingPlans from "@/parts/sections/PricingPlans";
import { PlanesIaData } from "@/data/plans/PlanesIaData";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesIntegracionesData } from "@/data/components/FeaturesIntegracionesData";
import FaqSection from "@/parts/sections/FaqSection";
import { FaqIntegracionesData } from "@/data/components/FaqIntegracionesData";

export const metadata = {
  title: "Inteligencia Artificial | Integración y Automatización con IA",
  description: "Integra modelos de inteligencia artificial en tu negocio para automatizar tareas, analizar datos y mejorar la experiencia de tus clientes.",
};

export default function InteligenciaArtificial(){
  return(
    <main className="main">
      <article>
        <PageHeader
          title="Inteligencia Artificial"
          description="Integra el poder de la inteligencia artificial en tu negocio para automatizar procesos, tomar mejores decisiones con datos y ofrecer experiencias personalizadas a tus clientes."
          highlights={[
            "Chatbots y Asistentes Virtuales",
            "Análisis Predictivo",
            "Procesamiento de Lenguaje Natural",
            "Automatización con IA",
            "Integración con APIs de IA",
            "Modelos Personalizados",
          ]}
        />
        <section className="content">
          <div className="container">
            <div className="content-container">
              <PricingPlans
                title="Planes de Inteligencia Artificial"
                description="Integra IA en tu negocio con planes adaptados a tu presupuesto y nivel de complejidad."
                plans={PlanesIaData}
              />
              <FeatureCards
                title="¿Por Qué Integrar Estas Soluciones?"
                description="La IA, la automatización y la seguridad no son el futuro, son el presente. Integrarlas en tu negocio hoy marca la diferencia frente a tu competencia."
                features={FeaturesIntegracionesData}
                width={6}
              />
              <FaqSection
                description="Resuelve tus dudas sobre integraciones de inteligencia artificial, automatización de procesos y seguridad."
                items={FaqIntegracionesData}
              />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}