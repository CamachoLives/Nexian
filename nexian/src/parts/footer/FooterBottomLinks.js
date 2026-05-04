import Link from "next/link";
export default function FooterBottomLinks() {
  return(
    <ul className="no-list display-flex gap footer-bottom-block">
      <li><Link href="/terms">Términos y Condiciones</Link></li>
      <li><Link href="/refund">Política de Reembolso</Link></li>
      <li><Link href="/privacy">Política de Privacidad</Link></li>
    </ul>
  );
}