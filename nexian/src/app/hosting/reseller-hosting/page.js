import Breadcrumb from "@/parts/components/Breadcrumb";
import PlansResellerHosting from "@/parts/plans/PlansResellerHosting";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import FaqHosting from "@/parts/components/FaqHosting";

export const metadata = {
  title: "Affordable Reseller Hosting Plans | White Label Hosting",
  description: "Build and grow your hosting business with powerful reseller hosting featuring fast servers, flexible plans, and full branding control.",
};


export default function WebHosting() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Reseller Hosting</h1>
              <p className="width-6 font-size-medium">White-label reseller hosting designed for developers, agencies, and entrepreneurs.</p>
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
              <PlansResellerHosting />
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