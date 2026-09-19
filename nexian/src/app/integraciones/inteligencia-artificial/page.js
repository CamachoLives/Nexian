import PageHeader from "@/parts/components/PageHeader";
import PlansVps from "@/parts/plans/PlansVps";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "Inteligencia Artificial | Integración y Automatización con IA",
  description: "Integra modelos de inteligencia artificial en tu negocio para automatizar tareas, analizar datos y mejorar la experiencia de tus clientes.",
};

export default function InteligenciaArtificial(){
  return(
    <main className="main">
      <article>
        <PageHeader
          title="Inteligencia Artificial"
          description="Integra el poder de la inteligencia artificial en tu negocio para automatizar procesos, tomar mejores decisiones con datos y ofrecer experiencias personalizadas a tus clientes."
          highlights={[
            "Chatbots y Asistentes Virtuales",
            "Análisis Predictivo",
            "Procesamiento de Lenguaje Natural",
            "Automatización con IA",
            "Integración con APIs de IA",
            "Modelos Personalizados",
          ]}
        />
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