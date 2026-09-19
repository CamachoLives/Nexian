import Link from "next/link";
import { ROUTES } from "@/config/routes";

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <h1 className="page-title">Página no encontrada</h1>
              <p className="width-6 font-size-medium">
                La página que buscas no existe o fue movida. Revisa la dirección o vuelve a una de nuestras secciones principales.
              </p>
              <div className="flex-container gap-2">
                <Link className="button" href={ROUTES.inicio}>Ir al inicio</Link>
                <Link className="button" href={ROUTES.servicios}>Ver servicios</Link>
                <Link className="button" href={ROUTES.contacto}>Contáctanos</Link>
              </div>
            </div>
          </div>
        </header>
        <div className="spacer-3"></div>
      </article>
    </main>
  );
}
