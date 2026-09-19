import PageHeader from "@/parts/components/PageHeader";
import ActionCardHosting from "@/parts/components/ActionCardHostingVps";
import Testimonial from "@/parts/components/Testimonial";

export const metadata = {
  title: "Sobre Nosotros | Desarrollo, IA y Ciberseguridad",
  description: "Conoce Nexian: desarrollo de software a medida, inteligencia artificial y ciberseguridad para impulsar la evolución digital de tu negocio.",
};

const sections = [
  {
    title: "Sobre Nexian",
    subtitle: "Soluciones digitales construidas para durar",
    paragraphs: [
      "En Nexian creemos que una buena base tecnológica es el punto de partida de todo proyecto exitoso. Desarrollamos software a medida, integramos inteligencia artificial y aplicamos ciberseguridad para que tu negocio crezca con confianza.",
      "Desde una landing page hasta sistemas de gestión completos, entregamos soluciones rápidas, seguras y fáciles de mantener.",
    ],
  },
  {
    title: "Nuestra Misión",
    subtitle: "Impulsar tu negocio con tecnología confiable",
    paragraphs: [
      "Nuestro objetivo es simple: que la tecnología de calidad sea accesible, potente y fácil de usar. Combinamos rendimiento, estabilidad y seguridad para que puedas concentrarte en tu negocio y no en la infraestructura.",
    ],
  },
  {
    title: "Nuestra Visión",
    subtitle: "Conectando el presente con el futuro",
    paragraphs: [
      "Mejoramos constantemente nuestras herramientas y procesos para responder a las necesidades de los negocios modernos.",
      "Queremos ser el aliado tecnológico de confianza para empresas y emprendedores que buscan soluciones ágiles, seguras y preparadas para los desafíos del futuro.",
    ],
  },
];

export default function Nosotros() {
  return (
    <main className="main main-about">
      <article>
        <PageHeader title="Sobre Nosotros" />
        <section className="content content-about">
          <div className="container">
            <div className="content-container about-content-container">
              {sections.map((section) => (
                <section key={section.title} className="section section-about">
                  <h2 className="section-title">{section.title}</h2>
                  <div className="section-small">
                    <p className="font-size-medium color-white">{section.subtitle}</p>
                  </div>
                  {section.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </section>
              ))}
              <Testimonial />
              <ActionCardHosting />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
