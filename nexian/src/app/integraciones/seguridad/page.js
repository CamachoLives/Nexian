import PageHeader from "@/parts/components/PageHeader";
import PricingPlans from "@/parts/sections/PricingPlans";
import { PlanesSeguridadData } from "@/data/plans/PlanesSeguridadData";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesIntegracionesData } from "@/data/components/FeaturesIntegracionesData";
import FaqSection from "@/parts/sections/FaqSection";
import { FaqIntegracionesData } from "@/data/components/FaqIntegracionesData";

export const metadata = {
  title: "Seguridad Web y Auditorías",
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
              <FeatureCards
                title="¿Por Qué Integrar Estas Soluciones?"
                description="La IA, la automatización y la seguridad no son el futuro, son el presente. Integrarlas en tu negocio hoy marca la diferencia frente a tu competencia."
                features={FeaturesIntegracionesData}
                width={6}
              />
              <FaqSection
                description="Resuelve tus dudas sobre integraciones de inteligencia artificial, automatización de procesos y seguridad."
                items={FaqIntegracionesData}
              />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}