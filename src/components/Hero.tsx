
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-arcadia-dark flex items-center relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-arcadia-dark/30" /> */}

      {/* Decorative elements */}
      <div className="absolute inset-0 items-center">
        <img alt="background" src="/bg-star.svg" className="object-cover w-5/6 absolute top-0 left-2/4 -translate-x-2/4 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <h1 className="text-4xl md:text-6xl font-bold text-arcadia-white mb-6 animate-fade-in flex flex-col gap-2">
            Onde a criatividade <br />
            encontra a tecnologia
            <span className="text-[#FF696A] font-normal capitalize text-3xl md:text-5xl ">Seu novo site começa aqui!</span>
          </h1>
          <Button
            className="w-72 h-14 bg-[#FF696A] hover:bg-arcadia-primary text-arcadia-white px-8 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-slow"
          >
              <Rocket className="mr-2 h-5 w-5" />
              Faça um Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
