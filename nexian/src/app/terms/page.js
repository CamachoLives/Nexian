import Breadcrumb from "@/parts/components/Breadcrumb";

export const metadata = {
  title: "Terms and Conditions | Darki Hosting",
  description: "Read the Darki Hosting terms and conditions to understand the rules, policies, and guidelines for using our hosting services.",
};

export default function Terms(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <h1 className="page-title">Terms and Conditions</h1>
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