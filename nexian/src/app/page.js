import Hero from "@/parts/main/Hero";
import HostingServices from "@/parts/components/HostingServices";
import Features from "@/parts/components/Features";
import Testimonial from "@/parts/components/Testimonial";
import ActionCardHostingVps from "@/parts/components/ActionCardHostingVps";

export const metadata = {
  title: "Affordable Web Hosting, VPS Hosting & Dedicated Servers | Darki",
  description: "Launch your website with fast and secure web hosting. Explore powerful VPS servers, dedicated servers, and scalable hosting solutions from Darki.",
};

export default function Home() {
  return (
    <main className="main main-home">
      <Hero />
      <section className="content content-home">
        <div className="container">
          <div className="content-container">
            <HostingServices />
            <Features />
            <Testimonial />
            <ActionCardHostingVps />
            <div className="spacer-3"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
