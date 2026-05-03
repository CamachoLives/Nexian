import Breadcrumb from "@/parts/components/Breadcrumb";
import PlansVps from "@/parts/plans/PlansVps";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "KVM VPS Servers | High Performance VPS Hosting",
  description: "Deploy powerful KVM VPS hosting with dedicated resources, full root access, fast SSD storage, and reliable infrastructure.",
};

export default function KvmVps(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">KVM VPS</h1>
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
              <PlansVps />
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