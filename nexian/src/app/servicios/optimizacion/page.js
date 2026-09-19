import Breadcrumb from "@/parts/components/Breadcrumb";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";

export const metadata = {
  title: "Optimización Web | Velocidad y Rendimiento | Darki",
  description: "Mejora la velocidad de carga, el rendimiento y el SEO técnico de tu sitio web. Análisis completo y optimización profesional para que tu página vuele.",
};

export default function Optimizacion() {
  return (
    <main className="main main-hosting">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Optimización de Páginas Web</h1>
              <p className="width-6 font-size-medium">
                Mejora la velocidad, el rendimiento y la experiencia de usuario de tu sitio web con técnicas avanzadas de optimización que se traducen en más visitas y más conversiones.
              </p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Optimización de Imágenes</li>
                <li>Configuración de Caché</li>
                <li>Mejora de Core Web Vitals</li>
                <li>Minificación de Recursos</li>
                <li>SEO Técnico</li>
                <li>Optimización de Base de Datos</li>
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