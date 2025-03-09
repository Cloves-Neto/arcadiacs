import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Devneto",
    image: "/portifolio/portifolio-1.svg",
    focus: [
      "Site de portifólio",
      "Identidade Forte",
      "Performance Superior",
      "Experiência Fluida",
      "Responsividade"
    ],
    link: "https://www.devneto.com.br/",
  },
  // Você pode adicionar mais projetos aqui
];

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta mudanças de tamanho de tela para ajustar elementos responsivos
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Configuração inicial
    handleResize();

    // Listener para redimensionamento
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="Portifolio" className="min-h-screen bg-arcadia-primary relative overflow-hidden py-16 md:py-24">
      {/* Background animado melhorado */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          alt="background"
          src="/bg-star.svg"
          className="object-cover w-full md:w-5/6 opacity-30 absolute top-0 left-1/2 -translate-x-1/2 animate-pulse"
        />

        {/* Círculos decorativos adicionais para melhorar o visual */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-arcadia-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-arcadia-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center md:items-start mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 relative">
            Nossos projetos
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-white/70 rounded-full hidden md:block"></span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl text-center md:text-left">
            Conheça alguns dos nossos trabalhos desenvolvidos com excelência e foco em resultados
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="w-full md:basis-full">
                <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
                  {/* Área da imagem com efeito hover */}
                  <div className="relative w-full md:w-3/5 group">
                    <div className="absolute inset-0 bg-arcadia-primary/20 rounded-lg transform scale-95 group-hover:scale-100 transition-all duration-300 blur-xl opacity-0 group-hover:opacity-70"></div>
                    <div className="relative overflow-hidden rounded-lg p-2 md:p-6transform transition-transform duration-300 group-hover:translate-y-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Card de informações com design melhorado */}
                  <div className="w-full md:w-2/5">
                    <div className="bg-arcadia-dark space-y-6 w-full p-6 md:p-8 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm relative overflow-hidden">
                      {/* Elemento decorativo */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-arcadia-primary/40 rounded-full blur-xl"></div>

                      <h3 className="text-2xl font-bold text-white relative inline-block">
                        FOCADO EM:
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-arcadia-primary rounded-full"></span>
                      </h3>

                      <ul className="space-y-4 w-full my-6">
                        {project.focus.map((item, index) => (
                          <li
                            key={index}
                            className="text-lg text-white/80 flex items-center gap-3 group transform transition-transform hover:translate-x-2"
                          >
                            <span className="w-2 h-2 bg-arcadia-primary rounded-full group-hover:w-3 transition-all"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
                        <Button
                          asChild
                          className="rounded-md bg-arcadia-white border-2 border-arcadia-primary text-arcadia-primary hover:bg-arcadia-primary hover:text-white transition-all duration-300 w-full md:w-auto px-6 py-5 text-lg font-medium shadow-lg hover:shadow-arcadia-primary/50"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Ver Projeto
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botões de navegação melhorados */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative bg-arcadia-dark/80 border-white/20 text-white hover:bg-white/20 hover:text-arcadia-primary transition-all duration-300" />
            <CarouselNext className="relative bg-arcadia-dark/80 border-white/20 text-white hover:bg-white/20 hover:text-arcadia-primary transition-all duration-300" />
          </div>
        </Carousel>

        {/* Indicador visual de múltiplos projetos */}
        {projects.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;