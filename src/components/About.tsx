import { Target, Fingerprint, Award } from "lucide-react";

const About = () => {
  return (
    <section id="Sobre" className="py-16 md:py-24 bg-arcadia-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 flex justify-center">
        <img
          alt="background"
          src="/bg-star.svg"
          className="object-cover w-5/6 max-w-lg md:max-w-2xl animate-pulse"
        />
      </div>

      {/* Title div content */}
      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-arcadia-secondary mb-4 md:mb-6">
            O Que Nos Define:
            <span className="block text-white mt-2">Visão, Missão e Diferenciais</span>
          </h2>

          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            Mais do que criar sites, construímos experiências digitais. Comprometidos com inovação e qualidade, cada etapa reflete nossos valores e visão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/** Card Component */}
          {[
            { icon: Target, title: "Missão", content: "Transformar ideias em soluções digitais excepcionais, impulsionando o sucesso dos nossos clientes através da tecnologia e inovação." },
            { icon: Fingerprint, title: "Valores", content: "Excelência, inovação, comprometimento e transparência são os pilares que guiam nossas ações e relacionamentos." },
            { icon: Award, title: "Diferenciais", content: "Expertise técnica, atendimento personalizado e compromisso com resultados que fazem a diferença no seu negócio." },
          ].map(({ icon: Icon, title, content }, index) => (
            <div key={index} className="group h-[280px] sm:h-[300px] [perspective:1200px]">
              <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front side */}
                <div className="absolute inset-0 bg-white rounded-lg p-6 md:p-8 flex flex-col items-center justify-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-arcadia-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-arcadia-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-arcadia-dark">{title}</h3>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 h-full w-full rounded-lg bg-arcadia-primary p-6 md:p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-lg flex flex-col items-center justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{title}</h3>
                  <p className="text-sm md:text-base text-white/90">{content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
