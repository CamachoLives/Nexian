import Image from "next/image";
import { siteConfig } from "@/config/site";

// Dimensiones intrínsecas de public/images/svg.svg. El tamaño visible lo fija
// .logo en CSS (height: 110px; width: auto); estas sirven para que el
// navegador reserve el hueco con la proporción correcta.
const LOGO = { src: "/images/svg.svg", width: 494, height: 164 };

/**
 * Logotipo del sitio, compartido por la cabecera y el pie.
 * @param {string} alt Texto alternativo.
 * @param {boolean} priority Precargarlo; solo para la cabecera, que está
 *   sobre el pliegue.
 */
export default function Logo({ alt = siteConfig.name, priority = false }) {
  return (
    <Image
      className="logo"
      src={LOGO.src}
      width={LOGO.width}
      height={LOGO.height}
      alt={alt}
      priority={priority}
    />
  );
}
