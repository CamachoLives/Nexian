import PageHeader from "@/parts/components/PageHeader";
import HostingTypes from "@/parts/components/HostingTypes";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesServiciosData } from "@/data/components/FeaturesServiciosData";
import ActionCard from "@/parts/components/ActionCard";

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
          description="Ofrezco soluciones digitales completas para tu negocio: desde la creación de tu sitio web hasta la seguridad y optimización de tu plataforma, con código limpio y resultados medibles."
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
              <HostingTypes />
              <FeatureCards
                title="¿Por Qué Elegir Nexian?"
                description="Desarrollo web profesional, seguridad aplicada y optimización real para que tu proyecto funcione rápido, seguro y sin problemas."
                features={FeaturesServiciosData}
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