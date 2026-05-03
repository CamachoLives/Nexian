import Breadcrumb from "@/parts/components/Breadcrumb";
import ContactSupportCards from "@/parts/components/ContactSupportCards";
import Link from "next/link";

export const metadata = {
  title: "Hosting Support Center | Technical Help | Darki",
  description: "Access the Darki support center for hosting assistance, troubleshooting guides, and technical help from our support team.",
};

export default function Support(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Support Center</h1>
              <p className="width-6 font-size-medium">Browse helpful guides, open support tickets, and check server status to keep your hosting services running smoothly.</p>
              <div className="flex-container gap-2">
                <Link className="button" href="#">Contact Sales</Link>
                <Link className="button" href="#">Documentation</Link>
                <Link className="button" href="#">Open Support Ticket</Link>
              </div>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <ContactSupportCards />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}