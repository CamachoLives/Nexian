import Breadcrumb from "@/parts/components/Breadcrumb";

export const metadata = {
  title: "Refund Policy | Darki Hosting",
  description: "Read the Darki Hosting refund policy to understand our money-back guarantee, refund eligibility, and billing terms.",
};

export default function Refund(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <h1 className="page-title">Refund Policy</h1>
              <Breadcrumb />
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <p>Page content</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}