import { FeaturesDedicatedData } from "@/data/components/FeaturesDedicatedData";
import Image from "next/image";

export default function FeaturesDedicated() {
  return (
    <section className="section section-features">
      <h2 className="section-title">¿Por Qué Trabajar Conmigo?</h2>
      <div className="section-small">
        <p className="font-size-medium width-6">Desarrollo web de calidad, seguridad aplicada y optimización real para que tu proyecto funcione de forma rápida, segura y profesional.</p>
      </div>
      <div className="cards cards-feature">
        {FeaturesDedicatedData.map((item) => <div key={item.id} className="card card-feature">
          <div className="card-icon">
            <Image className="image-size-x3" src={item.image} alt={item.title} width={48} height={48} />
          </div>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.text}</p>
        </div>)}
      </div>
    </section>
  )
}