import Breadcrumb from "@/parts/components/Breadcrumb";
import VpsTypes from "@/parts/components/VpsTypes";
import FeaturesVps from "@/parts/components/FeaturesVps";
import Testimonial from "@/parts/components/Testimonial";
import ActionCardVps from "@/parts/components/ActionCardVps";

export const metadata = {
  title: "Integraciones | IA, Automatizaciones y Seguridad | Nexian",
  description: "Integra inteligencia artificial, automatiza procesos y refuerza la seguridad de tu negocio con soluciones tecnológicas avanzadas y personalizadas.",
};

export default function Integraciones(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Integraciones Avanzadas</h1>
              <p className="width-6 font-size-medium">Potencia tu negocio con integraciones de inteligencia artificial, automatización de procesos y soluciones de seguridad diseñadas para trabajar juntas y darte ventaja competitiva.</p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Inteligencia Artificial</li>
                <li>Automatización de Procesos</li>
                <li>Seguridad Avanzada</li>
                <li>APIs e Integraciones</li>
                <li>Chatbots y Asistentes</li>
                <li>Monitoreo Continuo</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <VpsTypes />
              <FeaturesVps />
              <Testimonial />
              <ActionCardVps />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}