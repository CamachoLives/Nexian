import Breadcrumb from "@/parts/components/Breadcrumb";
import ActionCardHosting from "@/parts/components/ActionCardHostingVps";
import Testimonial from "@/parts/components/Testimonial";
export const metadata = {
  title: "About Darki Hosting | Fast Web Hosting & Server Infrastructure",
  description: "Get to know Darki Hosting, our technology, infrastructure, and dedication to providing fast, reliable web hosting and server solutions.",
};

export default function About() {
  return (
    <main className="main main-about">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">About Us</h1>
            </div>
          </div>
        </header>
        <section className="content content-about">
          <div className="container">
            <div className="content-container about-content-container">
              <section className="section section-about">
                <h2 className="section-title">About Darki</h2>
                <div className="section-small">
                  <p className="font-size-medium color-white">Reliable Hosting Built for Modern Websites</p>
                </div>
                <p>At Darki, we believe reliable infrastructure is the foundation of every successful online project. Our mission is to provide fast, secure, and scalable hosting solutions that help businesses, developers, and creators build and grow their online presence with confidence.</p>
                <p>From personal websites to high-traffic applications, Darki delivers the performance and reliability needed to keep your websites running smoothly.</p>
              </section>
              <section className="section section-about">
                <h2 className="section-title">Our Mission</h2>
                <div className="section-small">
                  <p className="font-size-medium color-white">Empowering Websites with Reliable Infrastructure</p>
                </div>
                <p>Our goal is simple: make high-quality hosting accessible, powerful, and easy to use. We focus on delivering hosting services that combine performance, stability, and simplicity so our customers can focus on building their websites instead of managing complex infrastructure.</p>
              </section>
              <section className="section section-about">
                <h2 className="section-title">Our Vision</h2>
                <div className="section-small">
                  <p className="font-size-medium color-white">Building the Future of Reliable Hosting</p>
                </div>
                <p>At Darki, we are constantly improving our platform, infrastructure, and services to meet the evolving needs of modern websites.</p>
                <p>Our vision is to become a trusted hosting platform that empowers businesses and creators worldwide with fast, secure, and dependable hosting solutions.</p>
              </section>
              <Testimonial />
              <ActionCardHosting />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}