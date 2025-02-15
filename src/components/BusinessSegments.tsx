
import { Building2, Hospital, Store, Scissors, ShoppingBag, PartyPopper, UtensilsCrossed, Dumbbell, Camera, Users, Home, ShoppingCart } from "lucide-react";

const segments = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Advocacia",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: <Hospital className="w-6 h-6" />,
    title: "Clínica",
    color: "from-green-500/20 to-green-600/20"
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: "Agência",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Salão",
    color: "from-pink-500/20 to-pink-600/20"
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Loja",
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    icon: <PartyPopper className="w-6 h-6" />,
    title: "Eventos",
    color: "from-red-500/20 to-red-600/20"
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Buffet",
    color: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Academia",
    color: "from-lime-500/20 to-lime-600/20"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Estúdio",
    color: "from-teal-500/20 to-teal-600/20"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Influencer",
    color: "from-cyan-500/20 to-cyan-600/20"
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Imobiliária",
    color: "from-indigo-500/20 to-indigo-600/20"
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Comércio",
    color: "from-violet-500/20 to-violet-600/20"
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
              className="group relative overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${segment.color} rounded-lg p-6 h-full transition-all duration-300 group-hover:scale-105`}>
                <div className="flex flex-col items-center justify-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-lg">
                    {segment.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-center">
                    {segment.title}
                  </h3>
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
