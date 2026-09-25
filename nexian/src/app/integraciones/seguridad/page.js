import PageHeader from "@/parts/components/PageHeader";
import PricingPlans from "@/parts/sections/PricingPlans";
import { PlanesSeguridadData } from "@/data/plans/PlanesSeguridadData";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "Seguridad Web | Auditorías y Protección Avanzada",
  description: "Auditorías de seguridad, detección de vulnerabilidades, protección contra malware y monitoreo continuo para mantener tu plataforma segura y blindada.",
};

export default function Seguridad(){
  return(
    <main className="main">
      <article>
        <PageHeader
          title="Seguridad Web"
          description="Protege tu sitio web y plataforma digital contra amenazas, vulnerabilidades y accesos no autorizados con auditorías profesionales y soluciones de seguridad avanzadas."
          highlights={[
            "Auditorías de Seguridad",
            "Detección de Malware",
            "Protección contra Ataques",
            "Certificados SSL",
            "Monitoreo Continuo",
            "Hardening de Servidores",
          ]}
        />
        <section className="content">
          <div className="container">
            <div className="content-container">
              <PricingPlans
                title="Planes de Seguridad Web"
                description="Elige el nivel de protección que necesita tu sitio web o plataforma digital."
                plans={PlanesSeguridadData}
              />
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