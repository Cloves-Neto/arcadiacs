import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { link } from "fs";

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
  },
];

const Portfolio = () => {
  return (
    <section id="Portifolio" className="min-h-screen bg-arcadia-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          alt="background"
          src="/bg-star.svg"
          className="object-cover w-5/6 absolute top-0 left-1/2 -translate-x-1/2 animate-pulse"
        />
      </div>

      <div className="container mx-auto py-24">
        <h2 className="flex justify-center text-4xl md:text-6xl capitalize font-bold text-white mb-16 items-center md:justify-start gap-4">
          Nossos projetos
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="w-full md:basis-full">
                <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 items-center justify-center">
                  {/* Project Image */}
                  <div className="relative w-full md:w-3/5 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-4/5"
                    />
                  </div>

                  {/* Project Info Card */}
                  <div className="w-full md:w-2/5 flex items-center justify-center">
                    <div className="bg-arcadia-dark space-y-6 w-full p-6 rounded-lg justify-center items-center">
                      <h3 className="text-2xl text-center font-bold text-white mb-8 md:text-start">
                        FOCADO EM:
                      </h3>
                      <ul className="space-y-4 w-full items-center justify-center md:items-start md:justify-start">
                        {project.focus.map((item, index) => (
                          <li
                            key={index}
                            className="text-lg text-center md:text-start text-white/80 flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-arcadia-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="mt-8 mx-auto rounded-md bg-arcadia-white border-arcadia-primary text-arcadia-primary hover:bg-arcadia-primary hover:text-white transition-colors w-28"
                      >
                        <a href="https://www.devneto.com.br/">Ver Projeto</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/10 text-white hover:bg-white/20" />
          <CarouselNext className="bg-white/10 text-white hover:bg-white/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
