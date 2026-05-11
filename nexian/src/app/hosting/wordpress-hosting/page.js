import Breadcrumb from "@/parts/components/Breadcrumb";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";

export const metadata = {
  title: "Software a la Medida | Desarrollo de Aplicaciones | Nexian",
  description: "Desarrollo de software personalizado para automatizar procesos, gestionar datos y hacer crecer tu negocio con soluciones tecnológicas hechas exactamente para ti.",
};

export default function Hosting() {
  return (
    <main className="main main-hosting">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Software a la Medida</h1>
              <p className="width-6 font-size-medium">
                Desarrollo aplicaciones y sistemas personalizados que se adaptan exactamente a los procesos de tu negocio, eliminando limitaciones de soluciones genéricas y ahorrándote tiempo y dinero.
              </p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Aplicaciones Web</li>
                <li>Sistemas de Gestión</li>
                <li>Automatización de Procesos</li>
                <li>APIs e Integraciones</li>
                <li>Paneles Administrativos</li>
                <li>Mantenimiento y Soporte</li>
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