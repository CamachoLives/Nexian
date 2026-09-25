import PageHeader from "@/parts/components/PageHeader";
import PricingPlans from "@/parts/sections/PricingPlans";
import { PlanesAutomatizacionData } from "@/data/plans/PlanesAutomatizacionData";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "Automatizaciones | Flujos de Trabajo y Procesos Automáticos",
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
              <FeaturesVps />
              <FaqVps />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}