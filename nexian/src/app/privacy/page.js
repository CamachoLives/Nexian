import Breadcrumb from "@/parts/components/Breadcrumb";

export const metadata = {
  title: "Privacy Policy | Darki Hosting",
  description: "Read the Darki Hosting privacy policy to learn how we collect, use, and protect your personal information.",
};

export default function Privacy(){
  return(
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <h1 className="page-title">Privacy Policy</h1>
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