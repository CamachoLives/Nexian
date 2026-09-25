import PageHeader from "@/parts/components/PageHeader";
import ServiceCards from "@/parts/sections/ServiceCards";
import { TiposServiciosData } from "@/data/components/TiposServiciosData";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesServiciosData } from "@/data/components/FeaturesServiciosData";
import ActionCard from "@/parts/components/ActionCard";
import FaqSection from "@/parts/sections/FaqSection";
import { FaqServiciosData } from "@/data/components/FaqServiciosData";

export const metadata = {
  title: "Software a la Medida | Desarrollo de Aplicaciones",
  description: "Desarrollo de software personalizado para automatizar procesos, gestionar datos y hacer crecer tu negocio con soluciones tecnológicas hechas exactamente para ti.",
};

export default function DesarrolloSoftware() {
  return (
    <main className="main main-hosting">
      <article>
        <PageHeader
          title="Software a la Medida"
          description="Desarrollamos aplicaciones y sistemas personalizados que se adaptan exactamente a los procesos de tu negocio, eliminando limitaciones de soluciones genéricas y ahorrándote tiempo y dinero."
          highlights={[
            "Aplicaciones Web",
            "Sistemas de Gestión",
            "Automatización de Procesos",
            "APIs e Integraciones",
            "Paneles Administrativos",
            "Mantenimiento y Soporte",
          ]}
        />
        <section className="content">
          <div className="container">
            <div className="content-container">
              <ServiceCards
                title="Servicios Profesionales de Desarrollo"
                description="Desarrollo web, seguridad y optimización para llevar tu proyecto al siguiente nivel."
                items={TiposServiciosData}
              />
              <FeatureCards
                title="¿Por Qué Elegir Nexian?"
                description="Desarrollo web profesional, seguridad aplicada y optimización real para que tu proyecto funcione rápido, seguro y sin problemas."
                features={FeaturesServiciosData}
              />
              <FaqSection
                description="Plazos, formas de trabajo, cambios y soporte: esto es lo que más nos preguntan antes de empezar un proyecto."
                items={FaqServiciosData}
              />
              <ActionCard />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}