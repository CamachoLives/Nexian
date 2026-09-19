import Breadcrumb from "@/parts/components/Breadcrumb";
import FaqDedicated from "@/parts/components/FaqDedicated";
import FeaturesDedicated from "@/parts/components/FeaturesDedicated";
import PlansDedicated from "@/parts/plans/PlansDedicated";

export const metadata = {
  title: "Servicios de Desarrollo Web | Seguridad y Optimización | Darki",
  description: "Desarrollo web profesional, auditorías de seguridad, optimización de rendimiento y gestión de CMS para llevar tu proyecto al siguiente nivel.",
};

export default function Desarrollo() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Servicios de Desarrollo</h1>
              <p className="width-6 font-size-medium">Soluciones web a medida con código limpio, seguridad aplicada y rendimiento optimizado para que tu proyecto destaque y funcione sin problemas.</p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Desarrollo a Medida</li>
                <li>Seguridad Web</li>
                <li>Optimización de Rendimiento</li>
                <li>Gestión de CMS</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <PlansDedicated />
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