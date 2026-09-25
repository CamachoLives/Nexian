import PageHeader from "@/parts/components/PageHeader";
import FaqDedicated from "@/parts/components/FaqDedicated";
import FeaturesDedicated from "@/parts/components/FeaturesDedicated";
import PricingPlans from "@/parts/sections/PricingPlans";
import { PlanesDesarrolloData } from "@/data/plans/PlanesDesarrolloData";

export const metadata = {
  title: "Servicios de Desarrollo Web | Seguridad y Optimización",
  description: "Desarrollo web profesional, auditorías de seguridad, optimización de rendimiento y gestión de CMS para llevar tu proyecto al siguiente nivel.",
};

export default function Desarrollo() {
  return (
    <main className="main">
      <article>
        <PageHeader
          title="Servicios de Desarrollo"
          description="Soluciones web a medida con código limpio, seguridad aplicada y rendimiento optimizado para que tu proyecto destaque y funcione sin problemas."
          highlights={[
            "Desarrollo a Medida",
            "Seguridad Web",
            "Optimización de Rendimiento",
            "Gestión de CMS",
          ]}
        />
        <section className="content">
          <div className="container">
            <div className="content-container">
              <PricingPlans
                title="Planes y Servicios"
                description="Elige el plan que mejor se adapte a tu proyecto. Desde soluciones puntuales hasta desarrollo completo y mantenimiento continuo."
                plans={PlanesDesarrolloData}
              />
              <FeaturesDedicated />
              <FaqDedicated />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}