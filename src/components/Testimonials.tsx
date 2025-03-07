import "@/styles/testmonials.css";

const testimonials = [
  {
    id: 1,
    author: "Maria Silva",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Experiência incrível! O site superou todas as expectativas e já estamos vendo resultados expressivos em conversões.",

  },
  {
    id: 2,
    author: "João Santos",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Design excepcional e performance impressionante. A equipe foi muito atenciosa durante todo o processo.",
  },
  {
    id: 3,
    author: "Ana Costa",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "O melhor investimento que fizemos para nossa empresa. O site ficou perfeito e a usabilidade é excelente.",
  },
  {
    id: 4,
    author: "Pedro Oliveira",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Resultados surpreendentes desde o primeiro mês. Recomendo fortemente para qualquer empresa.",
  },
  {
    id: 5,
    author: "Henry Tollf",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Resultados surpreendentes desde o primeiro mês. Recomendo fortemente para qualquer empresa.",
  },
  {
    id: 6,
    author: "Maria silva",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Resultados surpreendentes desde o primeiro mês. Recomendo fortemente para qualquer empresa.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-dvw min-h-screen flex flex-col bg-arcadia-dark relative overflow-hidden py-24 md:flex-row-reverse">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-arcadia-primary/20 to-transparent blur-3xl
          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Title section */}
      <div className="container w-2/5 relative text-left flex items-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          <span className="text-white block mb-4">O QUE</span>
          <span className="inline-block bg-[#FF6B6C] text-white px-6 py-2 skew-x-6 transform">
            TODO MUNDO
          </span>
          <span className="text-white block mt-4">ESTÁ FALANDO</span>
        </h2>
      </div>

      {/* Ferris wheel container */}
      <div className="w-3/5 relative flex items-center justify-center bg-green-100">

          {/* Testimonials wheel */}
          <div className="box rounded-full border border-arcadia-primary relative">
              <div className="img">
                {
                  testimonials.map((t)=>(
                    <div className={`imgBx i-${t.id}`}>
                        <img  src={`/perfil${t.id}.png`} alt={`imagem de perfil`+t.id} />
                    </div>
                  ))
                }
              </div>
          </div>

      </div>
    </section>
  );
};

export default Testimonials;
