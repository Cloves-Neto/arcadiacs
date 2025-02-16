
import { Building2, Hospital, Store, Scissors, ShoppingBag, PartyPopper, UtensilsCrossed, Dumbbell, Camera, Users, Home, ShoppingCart, MoreHorizontal, Image, Leaf, Gamepad } from "lucide-react";

const segments = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Advocacia",
    color: "from-blue-500/20 to-blue-600/20",
    description: "Sites jurídicos com design profissional e integração com sistemas legais."
  },
  {
    icon: <Hospital className="w-6 h-6" />,
    title: "Clínica",
    color: "from-green-500/20 to-green-600/20",
    description: "Plataformas médicas com agendamento online e gestão de pacientes."
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: "Agência",
    color: "from-purple-500/20 to-purple-600/20",
    description: "Websites modernos para agências com portfólio interativo."
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "Portfolio",
    color: "from-blue-400/20 to-blue-500/20",
    description: "Sites profissionais para exibir seus trabalhos e projetos de forma elegante."
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Jardinagem",
    color: "from-emerald-500/20 to-emerald-600/20",
    description: "Websites para paisagistas e serviços de jardinagem com galeria de projetos."
  },
  {
    icon: <Gamepad className="w-6 h-6" />,
    title: "Games",
    color: "from-purple-400/20 to-purple-500/20",
    description: "Plataformas para gamers, streamers e desenvolvedores de jogos."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Salão",
    color: "from-pink-500/20 to-pink-600/20",
    description: "Sistemas de beleza com agendamento e gestão de clientes."
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Loja",
    color: "from-orange-500/20 to-orange-600/20",
    description: "E-commerce completo com gestão de produtos e vendas."
  },
  {
    icon: <PartyPopper className="w-6 h-6" />,
    title: "Eventos",
    color: "from-red-500/20 to-red-600/20",
    description: "Plataformas de eventos com venda de ingressos online."
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Buffet",
    color: "from-yellow-500/20 to-yellow-600/20",
    description: "Sites para buffet com galeria e sistema de orçamentos."
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Academia",
    color: "from-lime-500/20 to-lime-600/20",
    description: "Plataformas fitness com área do aluno e treinos online."
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Estúdio",
    color: "from-teal-500/20 to-teal-600/20",
    description: "Portfólios fotográficos com galerias dinâmicas."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Influencer",
    color: "from-cyan-500/20 to-cyan-600/20",
    description: "Sites para influenciadores com integração às redes sociais."
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Imobiliária",
    color: "from-indigo-500/20 to-indigo-600/20",
    description: "Portais imobiliários com busca avançada de imóveis."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Comércio",
    color: "from-violet-500/20 to-violet-600/20",
    description: "Lojas virtuais completas com gestão de vendas."
  },
  {
    icon: <MoreHorizontal className="w-6 h-6" />,
    title: "Outros",
    color: "from-arcadia-primary/20 to-arcadia-secondary/20",
    description: "Tem uma ideia diferente? Entre em contato e vamos criar algo único!"
  }
];

const BusinessSegments = () => {
  return (
    <section className="py-24 bg-arcadia-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arcadia-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-arcadia-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Soluções para</span>
            <span className="block bg-arcadia-primary text-white px-6 py-2 my-4 inline-block">
              Cada Setor
            </span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Sites profissionais personalizados para seu negócio
          </p>
        </div>

        {/* Segments grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group h-[200px] [perspective:1000px]"
            >
              {/* Card Container */}
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} rounded-lg p-6 cursor-pointer [backface-visibility:hidden]`}>
                  <div className="flex flex-col items-center justify-center gap-4 text-white h-full">
                    <div className="p-3 bg-white/10 rounded-lg">
                      {segment.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-center">
                      {segment.title}
                    </h3>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className={`absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br ${segment.color} p-6 cursor-pointer [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
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
