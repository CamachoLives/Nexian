import Breadcrumb from "@/parts/components/Breadcrumb";
import FaqDedicated from "@/parts/components/FaqDedicated";
import FeaturesDedicated from "@/parts/components/FeaturesDedicated";
import PlansDedicated from "@/parts/plans/PlansDedicated";

export const metadata = {
  title: "Dedicated Servers | High Performance Bare Metal Servers",
  description: "Powerful dedicated servers with high-performance hardware, fast networking, and reliable infrastructure built for demanding applications and websites.",
};

export default function Dedicated() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Dedicated Servers</h1>
              <p className="width-6 font-size-medium">Our dedicated servers deliver powerful hardware, fast networking, and reliable infrastructure for your most demanding projects.</p>
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