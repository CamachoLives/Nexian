import { FeaturesData } from "@/data/components/FeaturesData";

export default function Features() {
  return (
    <section className="section section-features">
      <h2 className="section-title">Why Choose Darki</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Darki delivers fast, secure, and reliable hosting designed to power modern websites and growing online businesses.</p>
      </div>
      <div className="cards cards-feature">
        {FeaturesData.map((item) => <div key={item.id} className="card card-feature">
          <div className="card-icon"><img className="image-size-x3" src={item.image} alt={item.title} /></div>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.text}</p>
        </div>)}
      </div>
    </section>
  )
}