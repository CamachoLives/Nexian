import Breadcrumb from "@/parts/components/Breadcrumb";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import FaqHosting from "@/parts/components/FaqHosting";
import PlansHosting from "@/parts/plans/PlansHosting";

export const metadata = {
  title: "Shared Hosting Plans | Affordable Web Hosting",
  description: "Launch your website with reliable shared hosting featuring SSD storage, fast servers, and secure infrastructure for growing websites.",
};

export default function WebHosting() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Web Hosting</h1>
              <p className="width-6 font-size-medium">Reliable and budget-friendly cPanel hosting designed for personal websites, blogs, and growing small businesses.</p>
              <ul className="width-5 flex-container gap-2 list-check">
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
              <PlansHosting />
              <FeaturesHosting />
              <FaqHosting />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}