
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import BusinessSegments from "@/components/BusinessSegments";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <BusinessSegments />
      <Testimonials />
    </main>
  );
};

export default Index;
