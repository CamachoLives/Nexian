import PageHeader from "@/parts/components/PageHeader";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";

export const metadata = {
  title: "Creación de Sitios Web | Desarrollo Profesional",
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
              <HostingTypes />
              <FeaturesHosting />
              <ActionCardHosting />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}