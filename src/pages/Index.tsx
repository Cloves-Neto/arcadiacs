
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial/TestimonialOrbit";
import BusinessSegments from "@/components/BusinessSegments";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Diferenciais from "@/components/Diferenciais";
import Pricing from "@/components/Price";
import Cta from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="Inicio" className="bg-arcadia-dark">
        <Hero />
      </section>
      <section id="Sobre">
        <About />
      </section>

      <section id="cta" className="bg-arcadia-dark">
        <Cta/>
      </section>

      <section id="Diferenciais">
        <Diferenciais />
      </section>

      <section id="Portfolio" className="bg-arcadia-primary">
        <Portfolio />
      </section>

      <section id="cta" className="bg-arcadia-dark">
        <Cta/>
      </section>

      <section id="Comentarios" className="bg-arcadia-dark w-full h-screen">
        <Testimonial />
      </section>

      <section id="Price" className="bg-arcadia-dark">
        <Pricing />
      </section>

      <section id="Segmentos" className="bg-arcadia-white">
        <BusinessSegments />
      </section>
      
      <section id="cta" className="bg-arcadia-dark">
        <Cta/>
      </section>


      {/* <section id="contact" className="bg-arcadia-primary">
        <ContactForm />
      </section> */}

      <Footer />
    </main>
  );
};

export default Index;
