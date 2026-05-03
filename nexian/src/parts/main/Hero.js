import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
    width: '100px',
    height: 'auto',
  }
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-section hero-text">
            <h1 className="hero-title-wave">Conectando el presente con el futuro</h1>
            <p className="font-size-medium">Transformamos código en soluciones de alto impacto. Elevamos tu rendimiento y garantizamos la integridad de tus datos con seguridad avanzada.</p>
            <div className="flex-container gap">
              <Link className="button" href="/hosting/web-hosting">Comencemos a dar Soluciones!</Link>
            </div>
          </div>
          <div className="hero-section hero-image-section">
            <Image
              className="hero-image"
              src="/images/hero-server.svg"
              alt="hero slider"
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}