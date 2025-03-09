import React, { useState, useEffect } from 'react';
import { Testimonial } from './Testimonial';
import { TestimonialCard } from './TestimonialCard';
import { Icon } from '@iconify/react/dist/iconify.js';

interface TestimonialData {
  id: number;
  initial: string;
  name: string;
  date: string;
  rating: number;
  content: string;
}

const TestimonialOrbit: React.FC = () => {
  const [orbitSize, setOrbitSize] = useState(450);
  const [containerSize, setContainerSize] = useState(600);
  const [cardSize, setCardSize] = useState(20);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Ajusta os tamanhos com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 640) {
        // Mobile
        setOrbitSize(280);
        setContainerSize(350);
        setCardSize(16);
      } else if (width < 768) {
        // Small tablets
        setOrbitSize(320);
        setContainerSize(400);
        setCardSize(18);
      } else if (width < 1024) {
        // Tablets
        setOrbitSize(380);
        setContainerSize(500);
        setCardSize(20);
      } else {
        // Desktop
        setOrbitSize(450);
        setContainerSize(600);
        setCardSize(20);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials: TestimonialData[] = [
    {
      id: 1,
      initial: '/testmonial/ana.jpg',
      name: 'Ana Souza',
      date: '05/02/2025',
      rating: 4,
      content: 'Projeto entregue dentro do prazo e com excelente acabamento. Apenas pequenos ajustes foram necessários.'
    },
    {
      id: 2,
      initial: '/testmonial/felipe.jpg',
      name: 'Felipe Henrique  ',
      date: '12/01/2025',
      rating: 5,
      content: 'Profissional extremamente competente. O resultado final superou todas as minhas expectativas.'
    },
    {
      id: 3,
      initial: '/testmonial/ingrid.jpg',
      name: 'Ingrid',
      date: '28/01/2025',
      rating: 5,
      content: 'Comunicação clara e entrega rápida. Recomendo para qualquer tipo de projeto.'
    },
    {
      id: 4,
      initial: '/testmonial/marta.jpg',
      name: 'Marta Santos',
      date: '03/02/2025',
      rating: 3,
      content: 'Bom trabalho, mas demorou um pouco mais do que o prazo inicial.'
    },
    {
      id: 5,
      initial: '/testmonial/osmar.jpg',
      name: 'Osmar Ferreira',
      date: '15/01/2025',
      rating: 4,
      content: 'Muito profissional e atencioso às minhas necessidades. Resultados excelentes.'
    },
    {
      id: 6,
      initial: '/testmonial/romero.jpg',
      name: 'Romero Mendes',
      date: '22/02/2025',
      rating: 5,
      content: 'Melhor experiência que já tive com uma empresa de desenvolvimento. Certamente voltarei a contratar.'
    },
  ];

  // Função para navegar entre os depoimentos no modo móvel
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center p-4 sm:p-8 md:p-12 gap-6 overflow-hidden">
      {/* Title section */}
      <div className="text-center items-center text-3xl sm:text-4xl lg:w-2/6 flex flex-col lg:items-start justify-center gap-2 mb-8 lg:mb-0 text-white lg:text-start lg:text-5xl xl:text-6xl font-bold uppercase z-10">
        <p>O que</p>
        <p>todo mundo</p>
        <p className="w-auto p-2 bg-arcadia-secondary text-white">está falando</p>
        <p>de nós</p>
      </div>

      {/* Conteúdo de depoimentos - versão desktop (órbita) ou móvel (centralizado) */}
      {isMobile ? (
        <div className="w-full max-w-[500px] flex flex-col items-center justify-center">
          {/* Card centralizado */}
          <div className="bg-white rounded-lg shadow-xl p-6 mb-4 w-full max-w-[90%]">
            <Testimonial
              name={testimonials[activeTestimonial].name}
              date={testimonials[activeTestimonial].date}
              rating={testimonials[activeTestimonial].rating}
              content={testimonials[activeTestimonial].content}
              initial={testimonials[activeTestimonial].initial}
            />
          </div>

          {/* Navegação dos depoimentos */}
          <div className="flex justify-between items-center w-full max-w-[90%] mt-4">
            <button
              onClick={prevTestimonial}
              className="bg-arcadia-secondary text-white p-2 rounded-full"
              aria-label="Depoimento anterior"
            >
              <Icon icon="material-symbols:arrow-back-rounded" width="24px" />
            </button>

            {/* Indicadores de página */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === activeTestimonial ? 'w-8 bg-arcadia-secondary' : 'w-3 bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-arcadia-secondary text-white p-2 rounded-full"
              aria-label="Próximo depoimento"
            >
              <Icon icon="material-symbols:arrow-forward-rounded" width="24px" />
            </button>
          </div>
        </div>
      ) : (
        /* Versão orbital para desktop */
        <div className={`relative w-full max-w-[600px] lg:max-w-[700px] xl:max-w-[900px] aspect-square flex items-center justify-center`}>
          <div
            className="z-0 text-center text-white bg-opacity-50 bg-arcadia-light/5 rounded-full flex justify-center items-center"
            style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
          >
            <div className="w-2/3 h-2/3 rounded-full bg-arcadia-white/10 flex items-center justify-center">
              <div className="text-xl whitespace-nowrap font-bold bg-arcadia-dark/40 w-1/3 h-1/3 rounded-full flex justify-center items-center text-center">
                <Icon icon={"stash:comments-solid"} width="60%" />
              </div>
            </div>
          </div>

          <div className="orbit-container absolute w-full h-full rounded-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                initial={testimonial.initial}
                index={index}
                totalCards={testimonials.length}
                orbitSize={orbitSize}
                cardSize={cardSize}
              >
                <Testimonial
                  name={testimonial.name}
                  date={testimonial.date}
                  rating={testimonial.rating}
                  content={testimonial.content}
                  initial={testimonial.initial}
                />
              </TestimonialCard>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .orbit-container:hover .card-container {
          animation-play-state: paused;
        }

        .card-container:hover {
          animation-play-state: paused;
        }

        .card-container:hover .card-details {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
          pointer-events: auto;
        }

        @media (max-width: 640px) {
          .card-details {
            width: 220px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialOrbit;