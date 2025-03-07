
import { Building2, Hospital, Store, Scissors, ShoppingBag, PartyPopper, UtensilsCrossed, Dumbbell, Camera, Users, Home, ShoppingCart, MoreHorizontal, Image, Leaf, Gamepad } from "lucide-react";

const segments = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Advocacia",
    color: "bg-arcadia-primary",
    description: "Sites jurídicos com design profissional."
  },
  {
    icon: <Hospital className="w-10 h-10" />,
    title: "Clínica",
    color: "bg-arcadia-primary",
    description: "Plataformas médicas com agendamento online e gestão de pacientes."
  },
  {
    icon: <Store className="w-10 h-10" />,
    title: "Agência",
    color: "bg-arcadia-primary",
    description: "Websites modernos para agências com portfólio interativo."
  },
  {
    icon: <Image className="w-10 h-10" />,
    title: "Portfolio",
    color: "bg-arcadia-primary",
    description: "Sites profissionais para exibir seus trabalhos e projetos de forma elegante."
  },
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "Jardinagem",
    color: "bg-arcadia-secondary",
    description: "Websites para paisagistas e serviços de jardinagem com galeria de projetos."
  },
  {
    icon: <Gamepad className="w-10 h-10" />,
    title: "Games",
    color: "bg-arcadia-secondary",
    description: "Plataformas para gamers, streamers e jogos."
  },
  {
    icon: <Scissors className="w-10 h-10" />,
    title: "Salão",
    color: "bg-arcadia-secondary",
    description: "Sistemas de beleza com agendamento e gestão de clientes."
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Loja",
    color: "bg-arcadia-secondary",
    description: "E-commerce completo com gestão de produtos e vendas."
  },
  {
    icon: <PartyPopper className="w-10 h-10" />,
    title: "Eventos",
    color: "bg-arcadia-primary",
    description: "Plataformas de eventos com venda de ingressos online."
  },
  {
    icon: <UtensilsCrossed className="w-10 h-10" />,
    title: "Buffet",
    color: "bg-arcadia-primary",
    description: "Sites para buffet com galeria e sistema de orçamentos."
  },
  {
    icon: <Dumbbell className="w-10 h-10" />,
    title: "Academia",
    color: "bg-arcadia-primary",
    description: "Plataformas fitness com área do aluno e treinos online."
  },
  {
    icon: <Camera className="w-10 h-10" />,
    title: "Estúdio",
    color: "bg-arcadia-primary",
    description: "Portfólios fotográficos com galerias dinâmicas."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Influencer",
    color: "bg-arcadia-secondary",
    description: "Sites para influenciadores com integração às redes sociais."
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: "Petshops",
    color: "bg-arcadia-secondary",
    description: "Site incrivel para mostrar produtos e serviços para pets."
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: "Comércio",
    color: "bg-arcadia-secondary",
    description: "Lojas virtuais completas com gestão de vendas."
  },
  {
    icon: <MoreHorizontal className="w-10 h-10" />,
    title: "Outros",
    color: "bg-arcadia-secondary",
    description: "Tem uma ideia diferente? Entre em contato e vamos criar algo único!"
  }
];

const BusinessSegments = () => {
  return (
    <section id="Segmentos" className="py-24 bg-arcadia-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arcadia-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-arcadia-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
            <span className="bg-arcadia-primary  text-white inline-block text-4xl gap-2 md:text-5xl font-bold p-2">Soluções para cada setor</span>
            <span className="bg-arcadia-primary text-white inline-block text-4xl gap-2 md:text-5xl font-bold p-2">Sites profissionais personalizados para seu negócio</span>
        </div>

        {/* Segments grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group m-2 [perspective:1000px]"
            >
              {/* Card Container */}
              <div className="relative h-32 w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className={`absolute inset-0 bg-gradient-to-br border-4 ${segment.color} rounded-lg cursor-pointer [backface-visibility:hidden]`}>
                  <div className="flex items-center justify-center gap-4 text-white h-full">
                    <div className="p-3 rounded-lg">
                      {segment.icon}
                    </div>
                    <h3 className="font-semibold text-2xl text-center">
                      {segment.title}
                    </h3>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`absolute inset-0 h-full w-full rounded-lg border-2 ${segment.color} p-6 cursor-pointer [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                  <div className="flex flex-col items-center justify-center text-white h-full text-center">
                    <p className="text-sm leading-relaxed">
                      {segment.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSegments;
