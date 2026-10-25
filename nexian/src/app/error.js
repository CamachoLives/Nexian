"use client";

import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";

/**
 * 
 * Límite de error de las rutas: sustituye la pantalla en blanco por una
 * página con la cabecera y el pie del sitio, y con una vía de salida.
 */
export default function Error({ reset }) {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <h1 className="page-title">Algo no ha ido bien</h1>
              <p className="width-6 font-size-medium">
                No hemos podido cargar esta página. Puedes volver a intentarlo; si
                sigue fallando, escríbenos y lo revisamos.
              </p>
              <div className="flex-container gap-2">
                <button type="button" className="button" onClick={reset}>
                  Reintentar
                </button>
                <Link className="button" href={ROUTES.inicio}>Ir al inicio</Link>
                <Link
                  className="button"
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="spacer-3"></div>
      </article>
    </main>
  );
}
