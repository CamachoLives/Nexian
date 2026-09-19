import Link from "next/link";
import { ROUTES } from "@/config/routes";

export default function FooterBottomLinks() {
  return(
    <ul className="no-list display-flex gap footer-bottom-block">
      <li><Link href={ROUTES.terminos}>Términos y Condiciones</Link></li>
      <li><Link href={ROUTES.reembolso}>Política de Reembolso</Link></li>
      <li><Link href={ROUTES.privacidad}>Política de Privacidad</Link></li>
    </ul>
  );
}
