import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-section hero-text">
            <h1 className="hero-title-wave">Conectando el presente con el futuro</h1>
            <p className="font-size-medium">{siteConfig.description}</p>
            <div className="flex-container gap">
              <Link className="button" href={ROUTES.servicios}>Comencemos a dar Soluciones!</Link>
            </div>
          </div>
          <div className="hero-section hero-image-section">
            {/* Ilustración decorativa y a la vez el LCP de la portada: se
                precarga y se declara su relación de aspecto para no provocar
                salto de maquetación. */}
            <Image
              className="hero-image"
              src="/images/interface.svg"
              alt=""
              width={600}
              height={500}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
