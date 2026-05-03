import Breadcrumb from "@/parts/components/Breadcrumb";
import PlansWordPressHosting from "@/parts/plans/PlansWordPressHosting";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import FaqHosting from "@/parts/components/FaqHosting";

export const metadata = {
  title: "Fast WordPress Hosting | Optimized WP Hosting Plans",
  description: "High-performance WordPress hosting built for speed, security, and reliability. Perfect for blogs, business websites, and growing projects.",
};

export default function WebHosting() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">WordPress Hosting</h1>
              <p className="width-6 font-size-medium">High-performance WordPress hosting built for speed, security, and effortless website management.</p>
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
              <PlansWordPressHosting />
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