
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
    position: "top"
  },
  {
    id: 2,
    author: "João Santos",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Design excepcional e performance impressionante. A equipe foi muito atenciosa durante todo o processo.",
    animation: "animate-orbit-1",
    position: "right"
  },
  {
    id: 3,
    author: "Ana Costa",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "O melhor investimento que fizemos para nossa empresa. O site ficou perfeito e a usabilidade é excelente.",
    animation: "animate-orbit-1",
    position: "bottom"
  },
  {
    id: 4,
    author: "Pedro Oliveira",
    avatar: "/lovable-uploads/ad025785-f4db-4683-958c-1ed1e6a27fb5.png",
    rating: 5,
    text: "Resultados surpreendentes desde o primeiro mês. Recomendo fortemente para qualquer empresa.",
    animation: "animate-orbit-1",
    position: "left"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-dvw min-h-screen flex flex-col bg-arcadia-dark relative overflow-hidden py-24 md:flex-row-reverse">

      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px]
          rounded-full bg-gradient-to-br from-arcadia-primary/20 to-transparent blur-3xl
          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Title section */}
      <div className="container w-[50%] relative text-left flex items-center bg-fuchsia-300">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white block mb-4">O QUE</span>
            <span className="inline-block bg-[#FF6B6C] text-white px-6 py-2 skew-x-6 transform">
              TODO MUNDO
            </span>
            <span className="text-white block mt-4">ESTÁ FALANDO</span>
          </h2>
      </div>

      {/* Orbit system */}
      <div className="relative w-[50%] mx-auto">

        {/* Center element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            <div className="w-48 h-48 bg-white/10 backdrop-blur-lg rounded-full flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-white">+12K</span>
              <span className="text-arcadia-primary text-xl">projetos</span>
            </div>
          </div>
        </div>

        {/* Orbit paths */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />

        {/* Testimonial cards */}
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_20s_linear_infinite] ${
              testimonial.animation
            }`}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 w-[280px] shadow-xl hover:scale-105 transition-transform">
                <div className="flex gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-arcadia-primary"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 text-sm mt-3 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;
