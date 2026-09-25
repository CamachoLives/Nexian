import { PlansStorageVpsData } from "@/data/plans/PlansStorageVpsData";
import Link from "next/link";
import { whatsappLink } from "@/config/site";

export default function PlansStorageVps() {
  return (
    <section className="section section-pricing-hosting">
      <h2 className="section-title">Planes de Automatización</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Automatiza los procesos de tu negocio con soluciones adaptadas a tu flujo de trabajo y presupuesto.</p>
      </div>
      <div className="cards cards-pricing cards-pricing-hosting">
        {PlansStorageVpsData.map((plan) => (
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