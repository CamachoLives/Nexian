import Breadcrumb from "@/parts/components/Breadcrumb";
import PlansManagedVps from "@/parts/plans/PlansManagedVps";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "Managed VPS Hosting | Fully Managed Virtual Servers | Darki",
  description: "Reliable managed VPS hosting with expert server management, security updates, monitoring, and optimized performance for your applications.",
};

export default function ManagedVps(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Managed VPS</h1>
              <p className="width-6 font-size-medium">Experience high-performance VPS hosting with dedicated resources, fast networking, and dependable infrastructure.</p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>Full Root Access</li>
                <li>10 Gbps Port</li>
                <li>DDoS Protection</li>
                <li>IPv4 and IPv6</li>
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