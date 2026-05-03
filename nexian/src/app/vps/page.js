import Breadcrumb from "@/parts/components/Breadcrumb";
import VpsTypes from "@/parts/components/VpsTypes";
import FeaturesVps from "@/parts/components/FeaturesVps";
import Testimonial from "@/parts/components/Testimonial";
import ActionCardVps from "@/parts/components/ActionCardVps";

export const metadata = {
  title: "VPS Servers | KVM VPS, Managed VPS & Storage VPS | Darki",
  description: "Deploy high-performance VPS servers with dedicated resources, flexible plans, and reliable infrastructure for websites and applications.",
};

export default function Vps(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">VPS Hosting</h1>
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
              <VpsTypes />
              <FeaturesVps />
              <Testimonial />
              <ActionCardVps />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}