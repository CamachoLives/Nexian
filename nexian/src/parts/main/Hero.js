import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
    width: '100px',
    height: 'auto',
  }
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-section hero-text">
            <h1 className="hero-title-wave">Next-Generation Web Hosting and VPS Solutions</h1>
            <p className="font-size-medium">Powerful Ryzen servers, DDR5 RAM and NVMe SSD storage designed for speed and reliability.</p>
            <div className="flex-container gap">
              <Link className="button" href="/hosting/web-hosting">Explore Hosting Plans</Link>
              <Link className="button" href="/vps/kvm-vps">Explore Ryzen VPS</Link>
            </div>
          </div>
          <div className="hero-section hero-image-section">
            <Image
              className="hero-image"
              src="/images/hero-server.svg"
              alt="hero slider"
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}