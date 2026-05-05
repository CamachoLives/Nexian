import Image from "next/image";

export default function FooterMainAbout() {
  return (
    <div className="footer-block footer-main-block footer-about-block">
      <p>
        <Image 
          className="logo"
          src="/images/svg.svg"
          alt="Company Logo"
          height={30}
          width={120} 
          priority
        />
      </p>
      <p>
        Impulsamos la evolución digital de tu negocio con desarrollo de software 
        a medida, inteligencia artificial y ciberseguridad avanzada. Nos enfocamos 
        en entregar soluciones ágiles, seguras y optimizadas para los desafíos del futuro.
      </p>
    </div>
  );
}