import Breadcrumb from "@/parts/components/Breadcrumb";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";

export const metadata = {
  title: "Creación de Sitios Web | Desarrollo Profesional | Darki",
  description: "Diseño y desarrollo de sitios web profesionales, landing pages y tiendas online a medida. Resultados rápidos, modernos y optimizados para tu negocio.",
};

export default function PaginasWeb() {
  return (
    <main className="main main-hosting">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Creación de Sitios Web</h1>
              <p className="width-6 font-size-medium">
                Diseño y desarrollo de sitios web modernos, rápidos y adaptados a tu negocio. Desde una landing page hasta una tienda online completa, con código limpio y resultados reales.
              </p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Diseño Responsive</li>
                <li>Landing Pages</li>
                <li>Tiendas Online</li>
                <li>Sitios Corporativos</li>
                <li>Integración con CMS</li>
                <li>SEO desde el Inicio</li>
              </ul>
            </div>
          </div>
        </header>
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