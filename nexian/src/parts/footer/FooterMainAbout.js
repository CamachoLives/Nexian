import Image from "next/image";
export default function FooterMainAbout() {
  return (
    <div className="footer-block footer-main-block footer-about-block">
      <p><Image className="logo"
        src="/images/logo.svg"
        alt="Company Logo"
        height={30}
        width={0}
        priority
      /></p>
      <p>Darki is a modern web hosting template built for creators, developers, and businesses who demand speed, security, and reliability. We deliver powerful performance on a sleek dark foundation designed for the future of the web.</p>
    </div>
  );
}