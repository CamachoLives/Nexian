import PageHeader from "@/parts/components/PageHeader";
import ServiceCards from "@/parts/sections/ServiceCards";
import { TiposServiciosData } from "@/data/components/TiposServiciosData";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesServiciosData } from "@/data/components/FeaturesServiciosData";
import ActionCard from "@/parts/components/ActionCard";
import FaqSection from "@/parts/sections/FaqSection";
import { FaqServiciosData } from "@/data/components/FaqServiciosData";

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