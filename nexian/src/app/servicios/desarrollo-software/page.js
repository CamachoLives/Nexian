import PageHeader from "@/parts/components/PageHeader";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCard from "@/parts/components/ActionCard";

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
          description="Desarrollo aplicaciones y sistemas personalizados que se adaptan exactamente a los procesos de tu negocio, eliminando limitaciones de soluciones genéricas y ahorrándote tiempo y dinero."
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
              <HostingTypes />
              <FeaturesHosting />
              <ActionCard />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}