import Breadcrumb from "@/parts/components/Breadcrumb";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";

export const metadata = {
  title: "Servicios | Desarrollo Web, Seguridad y Optimización | Nexian",
  description: "Desarrollo de sitios web, software a la medida, auditorías de seguridad y optimización de rendimiento. Soluciones profesionales para llevar tu negocio al siguiente nivel.",
};

export default function Servicios() {
  return (
    <main className="main main-hosting">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Servicios Profesionales</h1>
              <p className="width-6 font-size-medium">
                Ofrezco soluciones digitales completas para tu negocio: desde la creación de tu sitio web hasta la seguridad y optimización de tu plataforma, con código limpio y resultados medibles.
              </p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Creación de Sitios Web</li>
                <li>Software a la Medida</li>
                <li>Seguridad Web</li>
                <li>Optimización de Rendimiento</li>
                <li>Gestión de CMS</li>
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