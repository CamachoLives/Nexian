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
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
