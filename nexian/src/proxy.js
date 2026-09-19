import { NextResponse } from "next/server";
import { REDIRECTS } from "@/config/redirects";

/**
 * Proxy de Next.js 16 (antes "middleware").
 * Resuelve redirecciones permanentes de rutas antiguas o alias hacia las
 * rutas canónicas definidas en src/config/routes.js.
 */
export function proxy(request) {
  const { pathname } = request.nextUrl;
  const normalized =
    pathname === "/" ? pathname : pathname.replace(/\/+$/, "").toLowerCase();

  const destination = REDIRECTS[normalized];

  if (destination && destination !== normalized) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Ignorar assets estáticos, imágenes optimizadas e imágenes públicas.
  matcher: ["/((?!_next/static|_next/image|images/).*)"],
};
