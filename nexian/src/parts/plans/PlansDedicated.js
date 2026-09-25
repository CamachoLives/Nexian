import { PlansDedicatedData } from "@/data/plans/PlansDedicatedData";
import Link from "next/link";
import { whatsappLink } from "@/config/site";

export default function PlansDedicated() {
  return (
    <section className="section section-pricing-hosting">
      <h2 className="section-title">Planes y Servicios</h2>
      <div className="section-small">
        <p className="font-size-medium width-6">Elige el plan que mejor se adapte a tu proyecto. Desde soluciones puntuales hasta desarrollo completo y mantenimiento continuo.</p>
      </div>
      <div className="cards cards-pricing cards-pricing-hosting">
        {PlansDedicatedData.map((plan) => (
          <div key={plan.id} className="card card-pricing card-pricing-hosting">
            <div className="card-pricing-header">
              <h3 className="card-title">{plan.name}</h3>
              <div className="card-price"><span className="card-price-value">{plan.price}</span> <span className="card-price-interval">/{plan.interval}</span></div>
            </div>
            <div className="card-pricing-body">
              <ul className="card-pricing-list">
                {plan.features.map((feature) => (
                  <li key={feature} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className="button"
              href={whatsappLink(`Hola, me interesa el ${plan.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contratar
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}