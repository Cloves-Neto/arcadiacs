import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

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

      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full" />
          </span>
          NOSSOS PROJETOS
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-full">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Project Image */}
                  <div className="relative w-full md:w-3/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full"
                    />
                  </div>

                  {/* Project Info Card */}
                  <div className="bg-arcadia-dark p-8 rounded-lg w-full md:w-2/5">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-8">
                        FOCADO EM:
                      </h3>
                      <ul className="space-y-4">
                        {project.focus.map((item, index) => (
                          <li
                            key={index}
                            className="text-lg text-white/90 flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-arcadia-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        className="mt-8 border-arcadia-primary text-arcadia-primary hover:bg-arcadia-primary hover:text-white transition-colors w-full"
                      >
                        Ver Projeto
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
