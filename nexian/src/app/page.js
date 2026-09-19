import Hero from "@/parts/main/Hero";
import HostingServices from "@/parts/components/HostingServices";
import Features from "@/parts/components/Features";
import Testimonial from "@/parts/components/Testimonial";
import ActionCardHostingVps from "@/parts/components/ActionCardHostingVps";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: { absolute: siteConfig.legalName },
  description: siteConfig.description,
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
