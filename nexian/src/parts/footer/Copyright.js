import { siteConfig } from "@/config/site";

export default function Copyright() {
  // Dentro del componente, no en el módulo: así el año se calcula en cada
  // render y no queda congelado en el momento en que se compiló el bundle.
  const year = new Date().getFullYear();

  return (
    <p className="footer-block footer-bottom-block">
      Copyright &#x00A9; {year} {siteConfig.name}. Todos los derechos reservados.
    </p>
  );
}
