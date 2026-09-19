import Breadcrumb from "@/parts/components/Breadcrumb";
import Link from "next/link";
import ContactCards from "@/parts/components/ContactCards";
import ContactSupportCards from "@/parts/components/ContactSupportCards";

export const metadata = {
  title: "Contacto | Desarrollo Web y Seguridad",
  description: "Contáctame para hablar sobre tu proyecto web, consultar sobre servicios de desarrollo, seguridad u optimización. Estoy aquí para ayudarte.",
};

export default function Contacto() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Contáctame</h1>
              <p className="width-6 font-size-medium">¿Tienes un proyecto en mente o necesitas ayuda con tu sitio web? Cuéntame tu caso y encontramos juntos la mejor solución.</p>
              <div className="flex-container gap-2">
                <Link className="button" href="#">Solicitar Presupuesto</Link>
                <Link className="button" href="#">Documentación</Link>
                <Link className="button" href="#">Abrir Ticket de Soporte</Link>
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