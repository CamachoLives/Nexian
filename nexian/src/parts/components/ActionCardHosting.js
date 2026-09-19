import Link from "next/link";
import { ROUTES } from "@/config/routes";

export default function ActionCardHosting() {
  return (
    <div className="section section-action-card section-action-card-hosting">
      <div className="card-action card-action-hosting">
        <h2 className="section-title">¿Listo para potenciar tu negocio?</h2>
        <p className="color-white font-size-medium">
          Transformamos tus ideas en software robusto, escalable y con los más altos estándares de seguridad.
        </p>
        <div className="flex-container gap">
          <Link className="button" href={ROUTES.softwareMedida}>
            Desarrollo a la Medida
          </Link>
          <Link className="button" href={ROUTES.seguridad}>
            Seguridad y Mitigación
          </Link>
          <Link className="button" href={ROUTES.contacto}>
            Hablemos de tu Proyecto
          </Link>
        </div>
      </div>
    </div>
  );
}