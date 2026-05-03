import Breadcrumb from "@/parts/components/Breadcrumb";
import HostingTypes from "@/parts/components/HostingTypes";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";

export const metadata = {
  title: "Web Hosting | Shared, Reseller & WordPress Hosting",
  description: "Explore reliable web hosting plans including shared hosting, reseller hosting, and optimized WordPress hosting with fast servers and secure infrastructure.",
};

export default function Hosting() {
  return (
    <main className="main main-hosting">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Lightning-Fast Hosting</h1>
              <p className="width-6 font-size-medium">Reliable and budget-friendly shared, reseller & wordpress hosting designed for personal websites, blogs, and growing small businesses.</p>
              <ul className="width-6 flex-container gap-2 list-check">
                <li>30-Days Daily Backup</li>
                <li>7-Days Money Back</li>
                <li>cPanel Control Panel</li>
                <li>Free SSL</li>
                <li>Offsite Backups</li>
                <li>Free Migration</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <HostingTypes />
              <FeaturesHosting />
              <ActionCardHosting />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}