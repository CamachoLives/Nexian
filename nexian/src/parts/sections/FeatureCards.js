import Image from "next/image";

/**
 * Cuadrícula de características con icono, título y texto.
 * @param {string} title Título de la sección.
 * @param {string} description Texto introductorio.
 * @param {Array} features Elementos a mostrar: { id, title, text, image }.
 * @param {number} width Ancho del texto introductorio (clase width-N).
 */
export default function FeatureCards({ title, description, features, width = 5 }) {
  return (
    <section className="section section-features">
      <h2 className="section-title">{title}</h2>
      <div className="section-small">
        <p className={`font-size-medium width-${width}`}>{description}</p>
      </div>
      <div className="cards cards-feature">
        {features.map((item) => (
          <div key={item.id} className="card card-feature">
            <div className="card-icon">
              <Image className="image-size-x3" src={item.image} alt="" width={48} height={48} />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
