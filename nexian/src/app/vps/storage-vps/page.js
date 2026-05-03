import Breadcrumb from "@/parts/components/Breadcrumb";
import PlansStorageVps from "@/parts/plans/PlansStorageVps";
import FeaturesVps from "@/parts/components/FeaturesVps";
import FaqVps from "@/parts/components/FaqVps";

export const metadata = {
  title: "Storage VPS | Secure Backup VPS | Darki",
  description: "Powerful Storage VPS with large disk space, stable networking, and reliable infrastructure for backups and large file storage.",
};

export default function StorageVps(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Storage VPS</h1>
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
              <PlansStorageVps />
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