import Breadcrumb from "@/parts/components/Breadcrumb";
import PlansManagedVps from "@/parts/plans/PlansManagedVps";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "Seguridad Web | Auditorías y Protección Avanzada | Darki",
  description: "Auditorías de seguridad, detección de vulnerabilidades, protección contra malware y monitoreo continuo para mantener tu plataforma segura y blindada.",
};

export default function ManagedVps(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Seguridad Web</h1>
              <p className="width-6 font-size-medium">Protege tu sitio web y plataforma digital contra amenazas, vulnerabilidades y accesos no autorizados con auditorías profesionales y soluciones de seguridad avanzadas.</p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Auditorías de Seguridad</li>
                <li>Detección de Malware</li>
                <li>Protección contra Ataques</li>
                <li>Certificados SSL</li>
                <li>Monitoreo Continuo</li>
                <li>Hardening de Servidores</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <PlansManagedVps />
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