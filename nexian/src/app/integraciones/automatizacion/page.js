import PageHeader from "@/parts/components/PageHeader";
import PricingPlans from "@/parts/sections/PricingPlans";
import { PlanesAutomatizacionData } from "@/data/plans/PlanesAutomatizacionData";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesIntegracionesData } from "@/data/components/FeaturesIntegracionesData";
import FaqSection from "@/parts/sections/FaqSection";
import { FaqIntegracionesData } from "@/data/components/FaqIntegracionesData";

export const metadata = {
  title: "Automatización de Procesos",
  description: "Automatiza tareas repetitivas, flujos de trabajo y procesos administrativos para ahorrar tiempo, reducir errores y escalar tu negocio.",
};

export default function Automatizacion(){
  return(
    <main className="main">
      <article>
        <PageHeader
          title="Automatizaciones"
          description="Elimina las tareas repetitivas de tu negocio con flujos de trabajo automatizados que trabajan por ti las 24 horas, reduciendo errores y liberando tu tiempo para lo que realmente importa."
          highlights={[
            "Automatización de Correos",
            "Flujos de Trabajo",
            "Integración entre Plataformas",
            "Reportes Automáticos",
            "Notificaciones Inteligentes",
            "Sincronización de Datos",
          ]}
        />
        <section className="content">
          <div className="container">
            <div className="content-container">
              <PricingPlans
                title="Planes de Automatización"
                description="Automatiza los procesos de tu negocio con soluciones adaptadas a tu flujo de trabajo y presupuesto."
                plans={PlanesAutomatizacionData}
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