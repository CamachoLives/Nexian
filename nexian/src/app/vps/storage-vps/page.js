import Breadcrumb from "@/parts/components/Breadcrumb";
import PlansStorageVps from "@/parts/plans/PlansStorageVps";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "Automatizaciones | Flujos de Trabajo y Procesos Automáticos | Nexian",
  description: "Automatiza tareas repetitivas, flujos de trabajo y procesos administrativos para ahorrar tiempo, reducir errores y escalar tu negocio.",
};

export default function StorageVps(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Automatizaciones</h1>
              <p className="width-6 font-size-medium">Elimina las tareas repetitivas de tu negocio con flujos de trabajo automatizados que trabajan por ti las 24 horas, reduciendo errores y liberando tu tiempo para lo que realmente importa.</p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Automatización de Correos</li>
                <li>Flujos de Trabajo</li>
                <li>Integración entre Plataformas</li>
                <li>Reportes Automáticos</li>
                <li>Notificaciones Inteligentes</li>
                <li>Sincronización de Datos</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <PlansStorageVps />
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