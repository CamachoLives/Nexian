import { FeaturesVpsData } from "@/data/components/FeaturesVpsData";
import Image from "next/image";

export default function FeaturesVps() {
  return (
    <section className="section section-features">
      <h2 className="section-title">Why Choose Our VPS</h2>
      <div className="section-small">
        <p className="font-size-medium width-6">Enjoy powerful hardware, fast network connectivity, and reliable uptime with our enterprise-grade dedicated server infrastructure.</p>
      </div>
      <div className="cards cards-feature">
        {FeaturesVpsData.map((item) => <div key={item.id} className="card card-feature">
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