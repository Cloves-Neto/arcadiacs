
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    author: "Maria Silva",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Experiência incrível! O site superou todas as expectativas e já estamos vendo resultados expressivos em conversões.",
    animation: "animate-orbit-1",
    rotate: "rotate-6"
  },
  {
    id: 2,
    author: "João Santos",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Design excepcional e performance impressionante. A equipe foi muito atenciosa durante todo o processo.",
    animation: "animate-orbit-2",
    rotate: "-rotate-3"
  },
  {
    id: 3,
    author: "Ana Costa",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "O melhor investimento que fizemos para nossa empresa. O site ficou perfeito e a usabilidade é excelente.",
    animation: "animate-orbit-3",
    rotate: "rotate-3"
  },
  {
    id: 4,
    author: "Pedro Oliveira",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Resultados surpreendentes desde o primeiro mês. Recomendo fortemente para qualquer empresa.",
    animation: "animate-orbit-4",
    rotate: "-rotate-6"
  }
];

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-arcadia-dark relative overflow-hidden py-24">
      {/* Background circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-arcadia-primary/5 blur-3xl 
                      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Center content with title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">O QUE</span>
            <span className="block bg-[#FF6B6C] text-white px-6 py-2 my-4">
              TODO MUNDO
            </span>
            <span className="text-white">ESTÁ FALANDO</span>
            <span className="block text-white">SOBRE NÓS?</span>
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-12 mt-8">
            <h2 className="text-6xl md:text-7xl font-bold text-white">
              + 12K
            </h2>
            <p className="text-xl text-arcadia-primary mt-2">
              projetos
            </p>
          </div>
        </div>
      </div>

      {/* Orbiting testimonials */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${testimonial.animation}`}
          >
            <div className={`relative transform ${testimonial.rotate} transition-transform duration-500 hover:scale-105 perspective-1000`}>
              {/* Floating bubble */}
              <div className="bg-white rounded-lg p-4 shadow-lg max-w-[280px] transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                <div className="flex gap-3 items-start">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="flex gap-1 text-yellow-400 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
