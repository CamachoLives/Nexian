import Image from "next/image";

/**
 * Resumen de servicios sin enlace, usado en la página de inicio.
 * @param {string} title Título de la sección.
 * @param {string} description Texto introductorio.
 * @param {Array} items Servicios: { id, title, intro, image }.
 * @param {number} width Ancho del texto introductorio (clase width-N).
 */
export default function ServicesGrid({ title, description, items, width = 6 }) {
  return (
    <section className="section section-services">
      <h2 className="section-title">{title}</h2>
      <div className="section-small">
        <p className={`font-size-medium width-${width}`}>{description}</p>
      </div>
      <div className="cards cards-services">
        {items.map((item) => (
          <div className="card card-services card-border" key={item.id}>
            <div className="card-icon">
              <Image className="image-size-x3" src={item.image} alt="" width={48} height={48} />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.intro}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
