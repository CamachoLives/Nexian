import PageHeader from "@/parts/components/PageHeader";
import ContactSupportCards from "@/parts/components/ContactSupportCards";
import Link from "next/link";

export const metadata = {
  title: "Centro de Soporte | Ayuda Técnica",
  description: "Accede al centro de soporte de Nexian para obtener ayuda con desarrollo web, seguridad, optimización de páginas, CMS y más.",
};

export default function Soporte(){
  return(
    <main className="main">
      <article>
        <PageHeader
          title="Centro de Soporte"
          description="Explora guías de ayuda, abre tickets de soporte y consulta el estado de tus servicios para mantener tu proyecto web funcionando sin problemas."
        >
          <div className="flex-container gap-2">
            <p className="button" >Contactar con Ventas</p>
            <p className="button" >Documentación</p>
            <p className="button" >Abrir Ticket de Soporte</p>
          </div>
        </PageHeader>
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