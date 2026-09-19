import Link from "next/link";
import { ROUTES } from "@/config/routes";

const secondaryLinks = [
  { label: "Desarrollo a la Medida", href: ROUTES.softwareMedida },
  { label: "Seguridad y Mitigación", href: ROUTES.seguridad },
];

/**
 * Llamado a la acción al final de las páginas.
 * @param {boolean} compactOnMobile Oculta los enlaces secundarios en móvil.
 */
export default function ActionCard({ compactOnMobile = false }) {
  const secondaryClass = compactOnMobile ? "button hide-mobile" : "button";

  return (
    <div className="section section-action-card section-action-card-hosting">
      <div className="card-action card-action-hosting">
        <h2 className="section-title">¿Listo para potenciar tu negocio?</h2>
        <p className="color-white font-size-medium">
          Transformamos tus ideas en software robusto, escalable y con los más altos estándares de seguridad.
        </p>
        <div className="flex-container gap">
          {secondaryLinks.map((link) => (
            <Link key={link.href} className={secondaryClass} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="button" href={ROUTES.contacto}>
            Hablemos de tu Proyecto
          </Link>
        </div>
      </div>
    </div>
  );
}
