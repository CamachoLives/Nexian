import Link from "next/link";

export default function ActionCardHosting() {
  return (
    <div className="section section-action-card section-action-card-hosting">
      <div className="card-action card-action-hosting">
        <h2 className="section-title">¿Listo para potenciar tu negocio?</h2>
        <p className="color-white font-size-medium">
          Transformamos tus ideas en software robusto, escalable y con los más altos estándares de seguridad.
        </p>
        <div className="flex-container gap">
          <Link className="button" href="/servicios/desarrollo-a-medida">
            Desarrollo a la Medida
          </Link>
          <Link className="button" href="/servicios/seguridad-informatica">
            Seguridad y Mitigación
          </Link>
          <Link className="button" href="/contacto">
            Hablemos de tu Proyecto
          </Link>
        </div>
      </div>
    </div>
  );
}