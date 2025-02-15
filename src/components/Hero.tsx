
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-arcadia-dark flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-arcadia-dark/30" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-arcadia-primary rounded-full animate-pulse" />
        <div className="absolute bottom-40 right-32 w-2 h-2 bg-arcadia-primary rounded-full animate-pulse delay-75" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-arcadia-secondary rounded-full animate-pulse delay-150" />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-arcadia-white mb-6 animate-fade-in">
            Transformamos ideias em experiências digitais incríveis!
          </h1>
          
          <p className="text-lg md:text-xl text-arcadia-light mb-8 animate-fade-in-slow">
            Desenvolvemos sites, sistemas e oferecemos suporte para manter sua presença online impecável.
          </p>

          <Button 
            size="lg"
            className="bg-arcadia-primary hover:bg-arcadia-primary/90 text-arcadia-white px-8 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-slow"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
