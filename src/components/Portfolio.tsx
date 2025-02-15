
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
    title: "Move - Mobilidade Urbana",
    image: "/lovable-uploads/686b1004-8104-42ab-9e13-447f71308926.png",
    focus: [
      "Conversão",
      "Identidade Forte",
      "Performance Superior",
      "Experiência Fluida",
    ],
  },
  // Add more projects here when available
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-arcadia-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-white/10">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 text-white/10">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="20" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full" />
          </span>
          NOSSOS PROJETOS
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg shadow-2xl"
                    />
                  </div>

                  {/* Project Info Card */}
                  <div className="bg-arcadia-dark p-8 rounded-lg">
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
                        className="mt-8 border-arcadia-primary text-arcadia-primary hover:bg-arcadia-primary hover:text-white transition-colors"
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
