import PageHeader from "@/parts/components/PageHeader";
import ServiceCards from "@/parts/sections/ServiceCards";
import { TiposServiciosData } from "@/data/components/TiposServiciosData";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesServiciosData } from "@/data/components/FeaturesServiciosData";
import ActionCard from "@/parts/components/ActionCard";
import FaqSection from "@/parts/sections/FaqSection";
import { FaqServiciosData } from "@/data/components/FaqServiciosData";

export const metadata = {
  title: "Creación de Sitios Web",
  description: "Diseño y desarrollo de sitios web profesionales, landing pages y tiendas online a medida. Resultados rápidos, modernos y optimizados para tu negocio.",
};

export default function PaginasWeb() {
  return (
    <main className="main main-hosting">
      <article>
        <PageHeader
          title="Creación de Sitios Web"
          description="Diseño y desarrollo de sitios web modernos, rápidos y adaptados a tu negocio. Desde una landing page hasta una tienda online completa, con código limpio y resultados reales."
          highlights={[
            "Diseño Responsive",
            "Landing Pages",
            "Tiendas Online",
            "Sitios Corporativos",
            "Integración con CMS",
            "SEO desde el Inicio",
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