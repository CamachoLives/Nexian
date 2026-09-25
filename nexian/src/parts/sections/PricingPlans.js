import Link from "next/link";
import { whatsappLink } from "@/config/site";

/**
 * Cuadro de planes con precio, características y botón de contratación.
 * @param {string} title Título de la sección.
 * @param {string} description Texto introductorio.
 * @param {Array} plans Planes a mostrar: { id, name, price, interval, features }.
 * @param {number} width Ancho del texto introductorio (clase width-N).
 */
export default function PricingPlans({ title, description, plans, width = 5 }) {
  return (
    <section className="section section-pricing-hosting">
      <h2 className="section-title">{title}</h2>
      <div className="section-small">
        <p className={`font-size-medium width-${width}`}>{description}</p>
      </div>
      <div className="cards cards-pricing cards-pricing-hosting">
        {plans.map((plan) => (
          <div key={plan.id} className="card card-pricing card-pricing-hosting">
            <div className="card-pricing-header">
              <h3 className="card-title">{plan.name}</h3>
              <div className="card-price">
                <span className="card-price-value">{plan.price}</span>{" "}
                <span className="card-price-interval">/{plan.interval}</span>
              </div>
            </div>
            <div className="card-pricing-body">
              <ul className="card-pricing-list">
                {plan.features.map((feature) => (
                  <li key={feature} className="feature-item">{feature}</li>
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
