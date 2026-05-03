import { HostingServicesData } from "@/data/components/HostingServicesData";
import Image from "next/image";
import Link from "next/link";

export default function HostingServices() {
  return (
    <section className="section section-services">
      <h2 className="section-title">Hosting & Server Solutions</h2>
      <div className="section-small">
        <p className="font-size-medium width-6">From shared hosting, reseller hosting to VPS and dedicated servers. We provides all hosting solutions under one roof.</p>
      </div>
      <div className="cards cards-services">
        {HostingServicesData.map((service) => (
          <div className="card card-services card-border" key={service.id}>
            <div className="card-icon">
              <Image className="image-size-x3" src={service.image} alt={service.name} width={48} height={48} />
            </div>
            <h3 className="card-title">{service.name}</h3>
            <p>{service.info}</p>
            <Link className="button card-button" href={service.url}>View Plans</Link>
          </div>
        ))}
      </div>
    </section>
  );
}