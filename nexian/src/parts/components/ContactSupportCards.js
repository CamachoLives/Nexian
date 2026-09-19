import { ContactSupportCardsData } from "@/data/components/ContactSupportCardsData";
import Image from "next/image";
import Link from "next/link";

export default function ContactSupportCards() {
  return (
    <section className="section section-contact-support-cards">
      <h2 className="section-title">¿Necesitas Ayuda con tu Proyecto?</h2>
      <div className="section-small">
        <p className="font-size-medium width-6">Contáctame y recibe asesoramiento personalizado para tu sitio web, ya sea desarrollo, seguridad u optimización.</p>
      </div>
      <div className="cards cards-contact">
        {ContactSupportCardsData.map((item) => (
          <div className="card card-border" key={item.id}>
            <div className="card-icon">
              <Image className="image-size-x3" src={item.icon} alt={item.title} width={48} height={48} />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.content}</p>
            <Link
              className="button"
              href={item.url}
              {...(item.url.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {item.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}