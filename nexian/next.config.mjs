/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['http://192.168.56.1:3000', 'localhost:3000'],
    // reactCompiler: true, // Try commenting this out if the crash persists
  },
};

export default nextConfig;