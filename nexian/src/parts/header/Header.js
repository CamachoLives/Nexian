import HeaderNav from "@/parts/header/HeaderNav";
import Link from "next/link";
import Logo from "@/parts/components/Logo";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/config/routes";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="site-brand">
            <Link href={ROUTES.inicio}>
              <Logo alt={`${siteConfig.name} - Inicio`} priority />
            </Link>
          </div>
          <div className="header-right">
            <HeaderNav />
            <div className="header-action view-in-desktop">
              <Link className="header-button" href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <i className="icon-user"></i> Contáctanos
              </Link>
            </div>
            <div className="header-user-icon">
              <Link className="header-user-button" href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp"><i className="icon-user"></i><span className="screen-reader-text"> Contáctanos </span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
