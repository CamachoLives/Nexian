import Breadcrumb from "@/parts/components/Breadcrumb";
import Link from "next/link";
import ContactCards from "@/parts/components/ContactCards";
import ContactSupportCards from "@/parts/components/ContactSupportCards";

export const metadata = {
  title: "Contact Darki Hosting | Hosting Support & Customer Service",
  description: "Reach out to Darki Hosting for expert support, hosting questions, and service assistance. Our team is here to help.",
};

export default function Contact() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Contact Us</h1>
              <p className="width-6 font-size-medium">Whether you are launching a new website, upgrading, or need expert support, our hosting specialists are ready to help.</p>
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
              <ContactCards />
              <ContactSupportCards />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}