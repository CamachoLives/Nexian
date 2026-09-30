// Cabeceras de seguridad aplicadas a todas las respuestas.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Aísla la ventana de las que la abran: sin acceso a window.opener.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Evita que otro origen incruste los recursos del sitio.
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  // Ningún cliente Flash/Acrobat heredado puede leer datos entre dominios.
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

// Las tarjetas sociales las consumen otros dominios, así que quedan fuera de
// la política Cross-Origin-Resource-Policy que aplica al resto del sitio.
const socialImageHeaders = [
  { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
];

// Los iconos y las ilustraciones de public/ tienen nombre fijo, así que se
// cachean un día en el navegador y se revalidan en la CDN.
const publicAssetHeaders = [
  { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Orígenes permitidos para acceder al servidor de desarrollo desde la red local.
  allowedDevOrigins: ["192.168.56.1", "localhost"],
  // No exponer la tecnología del servidor en la cabecera X-Powered-By.
  poweredByHeader: false,
  reactStrictMode: true,

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/images/:path*", headers: publicAssetHeaders },
      { source: "/:path(opengraph-image|twitter-image)", headers: socialImageHeaders },
    ];
  },
};

export default nextConfig;
