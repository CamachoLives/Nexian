import Breadcrumb from "@/parts/components/Breadcrumb";

export const metadata = {
  title: "Términos y Condiciones | Nexian",
  description: "Consulta los términos y condiciones que rigen el uso de los servicios de Nexian.",
};

export default function Terminos() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Términos y Condiciones</h1>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <p>Contenido en preparación.</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
