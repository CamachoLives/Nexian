import PageHeader from "@/parts/components/PageHeader";
import ServiceCards from "@/parts/sections/ServiceCards";
import { TiposServiciosData } from "@/data/components/TiposServiciosData";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesServiciosData } from "@/data/components/FeaturesServiciosData";
import ActionCard from "@/parts/components/ActionCard";
import FaqSection from "@/parts/sections/FaqSection";
import { FaqServiciosData } from "@/data/components/FaqServiciosData";

export const metadata = {
  title: "Servicios | Desarrollo Web, Seguridad y Optimización",
  description: "Desarrollo de sitios web, software a la medida, auditorías de seguridad y optimización de rendimiento. Soluciones profesionales para llevar tu negocio al siguiente nivel.",
};

export default function Servicios() {
  return (
    <main className="main main-hosting">
      <article>
        <PageHeader
          title="Servicios Profesionales"
          description="Ofrecemos soluciones digitales completas para tu negocio: desde la creación de tu sitio web hasta la seguridad y optimización de tu plataforma, con código limpio y resultados medibles."
          highlights={[
            "Creación de Sitios Web",
            "Software a la Medida",
            "Seguridad Web",
            "Optimización de Rendimiento",
            "Gestión de CMS",
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