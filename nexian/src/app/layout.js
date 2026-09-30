import "@/css/base.css";
import "@/css/globals.css";
import "@/css/layout.css";
import "@/css/header.css";
import "@/css/hero.css";
import "@/css/main.css";
import "@/css/footer.css";
import "@/css/shortcodes.css";
import "@/css/components.css";
import "@/css/iconly.css";
import "@/css/responsive.css";
import Header from "@/parts/header/Header";
import Footer from "@/parts/footer/Footer";
import { siteConfig } from "@/config/site";
import localFont from "next/font/local";
import StructuredData from "@/parts/seo/StructuredData";

// Manrope autoalojada: Next la precarga y evita el parpadeo de fuente.
const manrope = localFont({
  src: [
    { path: "../fonts/manrope-regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/manrope-bold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.legalName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <div id="contenido">{children}</div>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}
