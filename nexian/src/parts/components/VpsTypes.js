import { VpsTypesData } from "@/data/components/VpsTypesData";
import Image from "next/image";
import Link from "next/link";

export default function VpsTypes() {
  return (
    <section className="section section-hosting-types">
      <h2 className="section-title">Integraciones para tu Negocio</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Soluciones de IA, automatización y seguridad diseñadas para optimizar y proteger tu negocio.</p>
      </div>
      <div className="cards cards-hosting-types">
        {VpsTypesData.map((hostingtype) => (
          <div key={hostingtype.id} className="card card-hosting-type">
            <div className="card-icon">
              <Image className="image-size-x3" src={hostingtype.image} alt={hostingtype.title} width={48} height={48} />
            </div>
            <h3 className="card-title">{hostingtype.title}</h3>
            <p>{hostingtype.intro}</p>
            <Link className="button" href={hostingtype.url}>Ver Planes</Link>
          </div>
        ))}
      </div>
    </section>
  );
}