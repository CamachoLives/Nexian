import Hero from "@/parts/main/Hero";
import HostingServices from "@/parts/components/HostingServices";
import FeatureCards from "@/parts/sections/FeatureCards";
import { FeaturesInicioData } from "@/data/components/FeaturesInicioData";
import Testimonial from "@/parts/components/Testimonial";
import ActionCard from "@/parts/components/ActionCard";
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
            <FeatureCards
              title="¿Por qué elegir Nexian?"
              description="Nexian ofrece soluciones rápidas de forma segura y confiable diseñado para impulsar sitios web modernos y negocios en línea en crecimiento."
              features={FeaturesInicioData}
            />
            <Testimonial />
            <ActionCard compactOnMobile />
            <div className="spacer-3"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
