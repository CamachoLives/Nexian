import Breadcrumb from "@/parts/components/Breadcrumb";
import PlansVps from "@/parts/plans/PlansVps";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "Inteligencia Artificial | Integración y Automatización con IA | Darki",
  description: "Integra modelos de inteligencia artificial en tu negocio para automatizar tareas, analizar datos y mejorar la experiencia de tus clientes.",
};

export default function KvmVps(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Inteligencia Artificial</h1>
              <p className="width-6 font-size-medium">Integra el poder de la inteligencia artificial en tu negocio para automatizar procesos, tomar mejores decisiones con datos y ofrecer experiencias personalizadas a tus clientes.</p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Chatbots y Asistentes Virtuales</li>
                <li>Análisis Predictivo</li>
                <li>Procesamiento de Lenguaje Natural</li>
                <li>Automatización con IA</li>
                <li>Integración con APIs de IA</li>
                <li>Modelos Personalizados</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <PlansVps />
              <FeaturesVps />
              <FaqVps />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}