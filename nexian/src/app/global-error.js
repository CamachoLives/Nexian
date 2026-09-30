"use client";

import "@/css/base.css";
import "@/css/globals.css";

/**
 * Último recurso: se muestra cuando el error ocurre en el propio layout, así
 * que reemplaza el documento completo y no puede contar con la cabecera ni el
 * pie del sitio. Define su <html> y su <body>, como exige Next.
 */
export default function GlobalError({ reset }) {
  return (
    <html lang="es">
      <body style={{ display: "grid", placeItems: "center", minHeight: "100dvh", padding: "2rem", textAlign: "center" }}>
        <main>
          <h1>Algo no ha ido bien</h1>
          <p style={{ margin: "1rem 0 2rem" }}>
            El sitio no ha podido cargarse. Vuelve a intentarlo en unos segundos.
          </p>
          <button type="button" className="button" onClick={reset}>
            Reintentar
          </button>
        </main>
      </body>
    </html>
  );
}
