import { PlansStorageVpsData } from "@/data/plans/PlansStorageVpsData";
import Link from "next/link";

export default function PlansStorageVps() {
  return (
    <section className="section section-pricing-hosting">
      <h2 className="section-title">Affordable KVM Storage VPS</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">High-capacity storage VPS designed for backups, media files, and large data storage.</p>
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
            <Link className="button" href={plan.url}>Get Started</Link>
          </div>
        ))}
      </div>
    </section>
  );
}