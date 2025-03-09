import { Target, Fingerprint, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Observer para detectar quando cada card está visível na tela
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            // Atrasa o flip para criar um efeito em cascata
            setTimeout(() => {
              setFlippedCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });

              // Reset o flip após alguns segundos
              setTimeout(() => {
                setFlippedCards(prev => {
                  const newState = [...prev];
                  newState[index] = false;
                  return newState;
                });
              }, 4000);
            }, index * 400);
          }
        }
      });
    }, { threshold: 0.6 });

    // Registra cada card no observer
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Função para virar o card manualmente
  const toggleCard = (index) => {
    setFlippedCards(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const cardData = [
    {
      icon: Target,
      title: "Missão",
      content: "Transformar ideias em soluções digitais excepcionais, impulsionando o sucesso dos nossos clientes através da tecnologia e inovação."
    },
    {
      icon: Fingerprint,
      title: "Valores",
      content: "Excelência, inovação, comprometimento e transparência são os pilares que guiam nossas ações e relacionamentos."
    },
    {
      icon: Award,
      title: "Diferenciais",
      content: "Expertise técnica, atendimento personalizado e compromisso com resultados que fazem a diferença no seu negócio."
    },
  ];

  return (
    <section id="Sobre" className="py-16 md:py-24 bg-arcadia-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 flex justify-center">
        <img
          alt="background"
          src="/bg-star.svg"
          className="object-cover w-5/6 max-w-lg md:max-w-2xl animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-arcadia-dark/50 to-arcadia-dark/90" />
      </div>

      {/* Title div content */}
      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-arcadia-secondary mb-4 md:mb-6">
            O Que Nos Define:
            <span className="block text-white mt-2">Visão, Missão e Diferenciais</span>
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            Mais do que criar sites, construímos experiências digitais. Comprometidos com inovação e qualidade, cada etapa reflete nossos valores e visão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {cardData.map(({ icon: Icon, title, content }, index) => (
            <div
              key={index}
              // ref={el => cardRefs.current[index] = el}
              className="h-[280px] sm:h-[300px] perspective-1000 cursor-pointer"
              onClick={() => toggleCard(index)}
              style={{ perspective: '1200px' }}
            >
              <div
                className={`relative h-full w-full transition-all duration-700`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front side */}
                <div
                  className="absolute inset-0 bg-white rounded-lg p-6 md:p-8 flex flex-col items-center justify-center shadow-lg"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-arcadia-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-arcadia-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-arcadia-dark">{title}</h3>
                  <p className="text-xs text-arcadia-dark/50 mt-4">Toque para detalhes</p>
                </div>

                {/* Back side */}
                <div
                  className="absolute inset-0 h-full w-full rounded-lg bg-arcadia-primary p-6 md:p-8 text-center flex flex-col items-center justify-center shadow-lg"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{title}</h3>
                  <p className="text-sm md:text-base text-white/90">{content}</p>
                  <p className="text-xs text-white/50 mt-4">Toque para voltar</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;