import Image from "next/image";
import Link from "next/link";

/**
 * Tarjetas de servicios con icono, descripción y enlace a su página.
 * @param {string} title Título de la sección.
 * @param {string} description Texto introductorio.
 * @param {Array} items Servicios: { id, title, intro, image, url }.
 * @param {string} ctaLabel Texto del botón de cada tarjeta.
 * @param {number} width Ancho del texto introductorio (clase width-N).
 */
export default function ServiceCards({ title, description, items, ctaLabel = "Ver Planes", width = 5 }) {
  return (
    <section className="section section-hosting-types">
      <h2 className="section-title">{title}</h2>
      <div className="section-small">
        <p className={`font-size-medium width-${width}`}>{description}</p>
      </div>
      <div className="cards cards-hosting-types">
        {items.map((item) => (
          <div key={item.id} className="card card-hosting-type">
            <div className="card-icon">
              <Image className="image-size-x3" src={item.image} alt="" width={48} height={48} />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.intro}</p>
            <Link className="button" href={item.url}>{ctaLabel}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
