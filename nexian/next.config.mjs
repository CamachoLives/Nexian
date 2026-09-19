/** @type {import('next').NextConfig} */
const nextConfig = {
  // Orígenes permitidos para acceder al servidor de desarrollo desde la red local.
  allowedDevOrigins: ["192.168.56.1", "localhost"],
  // No exponer la tecnología del servidor en la cabecera X-Powered-By.
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
