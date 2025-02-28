import {Smartphone, Search, LayoutDashboard, Focus } from "lucide-react";

const differentials = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Otimização para Dispositivos Móveis",
      description: "Sites responsivos e adaptados para diferentes telas, proporcionando uma experiência impecável em qualquer dispositivo."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Integrado para Melhor Visibilidade",
      description: "Estrutura do site otimizada para motores de busca, aumentando o alcance e atraindo visitantes."
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Experiência de Navegação Intuitiva",
      description: "Layouts pensados para facilitar a navegação e converter visitantes em clientes."
    },
    {
      icon: <Focus className="w-8 h-8" />,
      title: "Foco em Conversão e Usabilidade",
      description: "Design e estrutura voltados para aumentar a taxa de conversão e facilitar a jornada do cliente."
    }
  ];

  const Diferenciais = ()=>{
    return(
        // {/* Differentials Section */}
        <section className="w-full min-h-screen flex items-center px-4 relative bg-arcadia-dark">

            {/* Decorative elements */}
            <div className="absolute inset-0 items-center">
                <img alt="background" src="/bg-star.svg" className="object-cover w-6/8 absolute top-0 left-2/4 -translate-x-2/4 animate-pulse" />
            </div>

            <div className="container mx-auto ">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left side - Image placeholder */}
                    <div className="aspect-square">
                        <img src="/diferenciais/arco-site.png" alt="mascote arco" className="w-full" />
                    </div>

                    {/* Right side - Differentials */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 inline-block w-full bg-arcadia-secondary px-6 py-3 text-center">
                        Nossos Sites Possuem
                        </h2>

                        <div className="space-y-8">
                        {differentials.map((item, index) => (
                            <div key={index} className="flex gap-4 items-start group">
                            <div className="w-12 h-12 rounded-full bg-arcadia-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-arcadia-primary transition-colors">
                                <span className="text-arcadia-white">
                                {item.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                {item.title}
                                </h3>
                                <p className="text-white/80 leading-relaxed">
                                {item.description}
                                </p>
                                {index < differentials.length - 1 && (
                                <div className="border-b border-white/60 mt-6"></div>
                                )}
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
export default Diferenciais;