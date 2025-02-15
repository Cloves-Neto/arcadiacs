
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    author: "Maria Silva",
    avatar: "/lovable-uploads/2b395b57-f327-41fb-8761-09c0cb7c82af.png",
    rating: 5,
    text: "Experiência incrível! O site superou todas as expectativas e já estamos vendo resultados expressivos em conversões.",
    position: "top-20 left-20"
  },
  {
    id: 2,
    author: "João Santos",
    avatar: "/lovable-uploads/2b395b57-f327-41fb-8761-09c0cb7c82af.png",
    rating: 5,
    text: "Design excepcional e performance impressionante. A equipe foi muito atenciosa durante todo o processo.",
    position: "top-40 right-32"
  },
  {
    id: 3,
    author: "Ana Costa",
    avatar: "/lovable-uploads/2b395b57-f327-41fb-8761-09c0cb7c82af.png",
    rating: 5,
    text: "O melhor investimento que fizemos para nossa empresa. O site ficou perfeito e a usabilidade é excelente.",
    position: "bottom-32 left-40"
  }
];

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-arcadia-dark relative overflow-hidden py-24">
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            + 12K
          </h2>
          <p className="text-xl text-arcadia-primary">
            projetos
          </p>
        </div>
      </div>

      {/* Floating testimonials */}
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className={`absolute ${testimonial.position} z-20 group`}
        >
          <div className="relative">
            {/* Floating bubble */}
            <div className="w-16 h-16 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-0 group-hover:opacity-0">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-full h-full object-cover animate-pulse"
              />
            </div>

            {/* Expanded card */}
            <div className="absolute top-0 left-0 bg-white rounded-lg p-6 w-80 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 -translate-x-1/3 -translate-y-1/3">
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-arcadia-dark">
                    {testimonial.author}
                  </h3>
                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Title */}
      <div className="absolute top-20 right-20 max-w-lg text-right z-30">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-white">O QUE</span>
          <span className="block bg-arcadia-primary text-white px-6 py-2 my-4">
            TODO MUNDO
          </span>
          <span className="text-white">ESTÁ FALANDO</span>
          <span className="block text-white">SOBRE NÓS?</span>
        </h2>
      </div>

      {/* Background circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arcadia-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-arcadia-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Testimonials;
