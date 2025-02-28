
import { Target, Fingerprint, Award, Smartphone, Search, LayoutDashboard, Focus } from "lucide-react";



const About = () => {
  return (
    <section className="py-24 bg-arcadia-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 items-center">
        <img alt="background" src="/bg-star.svg" className="object-cover w-5/6 absolute top-0 left-2/4 -translate-x-2/4 animate-pulse" />
      </div>

      {/*  Title div content */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-arcadia-secondary mb-6">
            O Que Nos Define:
            <span className="block text-white mt-2">Visão, Missão e Diferenciais</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
            Mais do que criar sites, construímos experiências digitais.
            Comprometidos com inovação e qualidade, cada etapa reflete
            nossos valores e visão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Missão */}
          <div className="group h-[300px] [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front side */}
              <div className="absolute inset-0 bg-white rounded-lg p-8 flex flex-col items-center justify-center [backface-visibility:hidden]">
                <div className="w-20 h-20 bg-arcadia-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-12 h-12 text-arcadia-primary" />
                </div>
                <h3 className="text-2xl font-bold text-arcadia-dark">Missão</h3>
              </div>

              {/* Back side */}
              <div className="absolute inset-0 h-full w-full rounded-lg bg-arcadia-primary p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Nossa Missão</h3>
                  <p className="text-white/90">
                    Transformar ideias em soluções digitais excepcionais, impulsionando
                    o sucesso dos nossos clientes através da tecnologia e inovação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Valores */}
          <div className="group h-[300px] [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front side */}
              <div className="absolute inset-0 bg-white rounded-lg p-8 flex flex-col items-center justify-center [backface-visibility:hidden]">
                <div className="w-20 h-20 bg-arcadia-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Fingerprint className="w-12 h-12 text-arcadia-primary" />
                </div>
                <h3 className="text-2xl font-bold text-arcadia-dark">Valores</h3>
              </div>

              {/* Back side */}
              <div className="absolute inset-0 h-full w-full rounded-lg bg-arcadia-primary p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Nossos Valores</h3>
                  <p className="text-white/90">
                    Excelência, inovação, comprometimento e transparência são os
                    pilares que guiam nossas ações e relacionamentos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Diferenciais */}
          <div className="group h-[300px] [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front side */}
              <div className="absolute inset-0 bg-white rounded-lg p-8 flex flex-col items-center justify-center [backface-visibility:hidden]">
                <div className="w-20 h-20 bg-arcadia-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-12 h-12 text-arcadia-primary" />
                </div>
                <h3 className="text-2xl font-bold text-arcadia-dark">Diferenciais</h3>
              </div>

              {/* Back side */}
              <div className="absolute inset-0 h-full w-full rounded-lg bg-arcadia-primary p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Nossos Diferenciais</h3>
                  <p className="text-white/90">
                    Expertise técnica, atendimento personalizado e compromisso
                    com resultados que fazem a diferença no seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
