import { PlansResellerData } from "@/data/plans/PlansResellerData";
import Link from "next/link";

export default function PlansResellerHosting() {
  return (
    <section className="section section-pricing-reseller">
      <h2 className="section-title">Reseller Hosting Plans</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Launch your own hosting brand with powerful tools, reliable servers, and complete white-label control.</p>
      </div>
      <div className="cards cards-pricing cards-pricing-hosting">
        {PlansResellerData.map((plan) => (
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
            <Link className="button" href={plan.url}>Get Started</Link>
          </div>
        ))}
      </div>
    </section>
  );
}