import Breadcrumb from "@/parts/components/Breadcrumb";

/**
 * Cabecera estándar de las páginas internas: breadcrumb, título,
 * descripción opcional, lista de puntos clave y contenido extra (children).
 */
export default function PageHeader({ title, description, highlights = [], children }) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header-container">
          <Breadcrumb />
          <h1 className="page-title">{title}</h1>
          {description && <p className="width-6 font-size-medium">{description}</p>}
          {highlights.length > 0 && (
            <ul className="width-6 flex-container gap-2 list-check">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {children}
        </div>
      </div>
    </header>
  );
}
