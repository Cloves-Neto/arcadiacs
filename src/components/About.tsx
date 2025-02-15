
import { Target, Fingerprint, Award, Smartphone, Search, LayoutDashboard, Focus, ChevronDown } from "lucide-react";

const differentials = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Otimização para Dispositivos Móveis",
    description: "Sites responsivos e adaptados para diferentes telas, proporcionando uma experiência impecável em qualquer dispositivo."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO Integrado para Melhor Visibilidade",
    description: "Estrutura do site otimizada para motores de busca, aumentando o alcance e atraindo visitantes."
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Experiência de Navegação Intuitiva",
    description: "Layouts pensados para facilitar a navegação e converter visitantes em clientes."
  },
  {
    icon: <Focus className="w-6 h-6" />,
    title: "Foco em Conversão e Usabilidade",
    description: "Design e estrutura voltados para aumentar a taxa de conversão e facilitar a jornada do cliente."
  }
];

const About = () => {
  return (
    <section className="py-24 bg-arcadia-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 text-arcadia-primary/20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor">
          <circle cx="60" cy="60" r="60"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 text-arcadia-primary/20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor">
          <path d="M0 120L60 60L120 120H0Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-arcadia-primary mb-6">
            O Que Nos Define:
            <span className="block text-white mt-2">Visão, Missão e Diferenciais</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
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
              <div className="absolute inset-0 bg-white rounded-lg p-8 text-center [backface-visibility:hidden]">
                <div className="w-16 h-16 bg-arcadia-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-arcadia-primary" />
                </div>
                <h3 className="text-2xl font-bold text-arcadia-dark mb-4">Missão</h3>
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
              <div className="absolute inset-0 bg-white rounded-lg p-8 text-center [backface-visibility:hidden]">
                <div className="w-16 h-16 bg-arcadia-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Fingerprint className="w-8 h-8 text-arcadia-primary" />
                </div>
                <h3 className="text-2xl font-bold text-arcadia-dark mb-4">Valores</h3>
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
              <div className="absolute inset-0 bg-white rounded-lg p-8 text-center [backface-visibility:hidden]">
                <div className="w-16 h-16 bg-arcadia-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-arcadia-primary" />
                </div>
                <h3 className="text-2xl font-bold text-arcadia-dark mb-4">Diferenciais</h3>
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

      {/* Differentials Section with Datalist */}
      <div className="container mx-auto px-4 mt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image placeholder */}
          <div className="bg-white/5 rounded-lg aspect-square"></div>

          {/* Right side - Differentials */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 inline-block bg-arcadia-primary px-6 py-3 rounded-lg">
              Nossos Sites Possuem
            </h2>

            <div className="space-y-4">
              <dl className="space-y-4">
                {differentials.map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10">
                    <dt>
                      <button 
                        className="w-full px-6 py-4 flex items-center justify-between text-white group"
                        onClick={(e) => {
                          const details = e.currentTarget.nextElementSibling;
                          if (details) {
                            details.classList.toggle('hidden');
                          }
                          e.currentTarget.querySelector('.arrow')?.classList.toggle('rotate-180');
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-arcadia-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-arcadia-primary/20 transition-colors">
                            <span className="text-arcadia-primary">
                              {item.icon}
                            </span>
                          </div>
                          <span className="text-xl font-semibold">{item.title}</span>
                        </div>
                        <ChevronDown className="w-6 h-6 transition-transform arrow" />
                      </button>
                    </dt>
                    <dd className="hidden px-6 pb-4 text-white/80 pl-[5.5rem]">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
