import Link from "next/link";
export default function FooterBottomLinks() {
  return(
    <ul className="no-list display-flex gap footer-bottom-block">
      <li><Link href="/terms">Terms & Conditions</Link></li>
      <li><Link href="/refund">Refund Policy</Link></li>
      <li><Link href="/privacy">Privacy Policy</Link></li>
    </ul>
  );
}