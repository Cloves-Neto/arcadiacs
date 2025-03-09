import { Button } from "@/components/ui/button";
import { Rocket, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  // Animation effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-screen bg-arcadia-dark flex flex-col justify-between relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          alt="background"
          src="/bg-star.svg"
          className="object-cover w-full h-full opacity-80 absolute top-0 left-0 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-arcadia-dark/70 via-arcadia-dark/50 to-arcadia-dark/90" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col h-full justify-center relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mt-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-arcadia-white mb-3 leading-tight">
              Onde a criatividade<br />encontra a tecnologia
            </h1>
            <p className="text-xl sm:text-2xl md:text-4xl text-[#FF696A] font-normal mt-2 mb-8">
              Seu novo site começa aqui!
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6 animate-fade-in-slow">
            <Button
              asChild
              className="w-64 h-14 bg-[#FF696A] hover:bg-[#ff8182] text-arcadia-white py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://wa.link/o3eofo" className="flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Faça um Orçamento
              </a>
            </Button>

            <div className="flex items-center mt-4 text-arcadia-white/70 text-sm">
              <div className="h-px w-8 bg-arcadia-white/30 mr-2"></div>
              Comece seu projeto hoje
              <div className="h-px w-8 bg-arcadia-white/30 ml-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="pb-8 flex justify-center animate-bounce relative z-10">
        <button
          className="text-arcadia-white/70 hover:text-arcadia-white transition-colors duration-300 focus:outline-none"
          onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
        >
          <ChevronDown className="w-8 h-8" />
          <span className="sr-only">Rolar para baixo</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;