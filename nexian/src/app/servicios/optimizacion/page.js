import PageHeader from "@/parts/components/PageHeader";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";

export const metadata = {
  title: "Optimización Web | Velocidad y Rendimiento",
  description: "Mejora la velocidad de carga, el rendimiento y el SEO técnico de tu sitio web. Análisis completo y optimización profesional para que tu página vuele.",
};

export default function Optimizacion() {
  return (
    <main className="main main-hosting">
      <article>
        <PageHeader
          title="Optimización de Páginas Web"
          description="Mejora la velocidad, el rendimiento y la experiencia de usuario de tu sitio web con técnicas avanzadas de optimización que se traducen en más visitas y más conversiones."
          highlights={[
            "Optimización de Imágenes",
            "Configuración de Caché",
            "Mejora de Core Web Vitals",
            "Minificación de Recursos",
            "SEO Técnico",
            "Optimización de Base de Datos",
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