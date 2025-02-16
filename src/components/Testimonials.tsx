
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
  },
  {
    id: 2,
    author: "João Santos",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Design excepcional e performance impressionante. A equipe foi muito atenciosa durante todo o processo.",
    animation: "animate-orbit-2",
  },
  {
    id: 3,
    author: "Ana Costa",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "O melhor investimento que fizemos para nossa empresa. O site ficou perfeito e a usabilidade é excelente.",
    animation: "animate-orbit-3",
  },
  {
    id: 4,
    author: "Pedro Oliveira",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Resultados surpreendentes desde o primeiro mês. Recomendo fortemente para qualquer empresa.",
    animation: "animate-orbit-4",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-screen bg-arcadia-dark relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-arcadia-primary/20 to-transparent blur-3xl 
                      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Title section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl ml-auto text-right mb-20">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white block mb-4">O QUE</span>
            <span className="inline-block bg-[#FF6B6C] text-white px-6 py-2 skew-x-6 transform">
              TODO MUNDO
            </span>
            <span className="text-white block mt-4">ESTÁ FALANDO</span>
          </h2>
        </div>
      </div>

      {/* Orbit system with sequential rotation */}
      <div className="relative w-full max-w-[1000px] h-[600px] mx-auto">
        {/* Center element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            <div className="w-48 h-48 bg-white/10 backdrop-blur-lg rounded-full flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-white">+12K</span>
              <span className="text-arcadia-primary text-xl">projetos</span>
            </div>
          </div>
        </div>

        {/* Orbit path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />

        {/* Testimonial cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {testimonials.map((testimonial, index) => {
            const angle = (index * 90) % 360; // Distribute cards evenly around the circle
            const delay = index * 5; // 5 second delay between each card
            
            return (
              <div
                key={testimonial.id}
                className="absolute"
                style={{
                  transform: `rotate(${angle}deg) translateX(300px)`,
                  animation: `orbit ${20}s linear infinite`,
                  animationDelay: `${-delay}s`
                }}
              >
                <div 
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 w-[280px] shadow-xl hover:scale-105 transition-transform"
                  style={{ transform: `rotate(-${angle}deg)` }} // Counter-rotate to keep cards upright
                >
                  <div className="flex gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-arcadia-primary"
                    />
                    <div className="text-left">
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-3 leading-relaxed text-left">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
