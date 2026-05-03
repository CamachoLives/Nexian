import { ContactSupportCardsData } from "@/data/components/ContactSupportCardsData";
import Image from "next/image";
import Link from "next/link";

export default function ContactSupportCards() {
  return (
    <section className="section section-contact-support-cards">
      <h2 className="section-title">Need Technical Support!</h2>
      <div className="section-small">
        <p className="font-size-medium width-6">Get fast and reliable assistance from our experts whenever you need help with your hosting services.</p>
      </div>
      <div className="cards cards-contact">
        {ContactSupportCardsData.map((item) => (
          <div className="card card-border" key={item.id}>
            <div className="card-icon">
              <Image className="image-size-x3" src={item.icon} alt={item.title} width={48} height={48} />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.content}</p>
            <Link className="button" href={item.url}>{item.buttonText}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}