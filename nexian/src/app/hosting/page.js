import Breadcrumb from "@/parts/components/Breadcrumb";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";

export const metadata = {
  title: "Servicios de Software | Desarrollo a Medida y Ciberseguridad",
  description: "Soluciones de software personalizadas, inteligencia artificial y ciberseguridad. Optimizamos procesos y blindamos infraestructuras digitales.",
};

export default function Hosting() {
  return (
    <main className="main main-hosting">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Soluciones de Software y Seguridad</h1>
              <p className="width-6 font-size-medium">
                Desarrollo ágil de aplicaciones, optimización de plataformas y blindaje técnico diseñado para escalar tu negocio con seguridad y eficiencia.
              </p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Desarrollo Full-Stack</li>
                <li>Mitigación de Vulnerabilidades</li>
                <li>Automatización con IA</li>
                <li>Arquitectura Escalable</li>
                <li>Gestión de Parches</li>
                <li>Optimización de Rendimiento</li>
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