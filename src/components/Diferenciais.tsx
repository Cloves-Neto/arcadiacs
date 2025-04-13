import { Smartphone, Search, LayoutDashboard, Focus, ChevronRight } from "lucide-react";
import React, { useState, useEffect, useRef } from 'react';

const differentials = [
  {
    icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Otimização para Dispositivos Móveis",
    description: "Sites responsivos e adaptados para diferentes telas, proporcionando uma experiência impecável em qualquer dispositivo.",
    color: "#FF696A"
  },
  {
    icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
    title: "SEO Integrado para Melhor Visibilidade",
    description: "Estrutura do site otimizada para motores de busca, aumentando o alcance e atraindo visitantes.",
    color: "#FF696A"
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Experiência de Navegação Intuitiva",
    description: "Layouts pensados para facilitar a navegação e converter visitantes em clientes.",
    color: "#FF696A"
  },
  {
    icon: <Focus className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Foco em Conversão e Usabilidade",
    description: "Design e estrutura voltados para aumentar a taxa de conversão e facilitar a jornada do cliente.",
    color: "#FF696A"
  }
];

const Diferenciais = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Rotação mais lenta dos cards ativos (15 segundos em vez de 8)
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % differentials.length);
    }, 15000); // Aumentado de 8000 para 15000

    return () => clearInterval(interval);
  }, [isInView]);

  // Detectar quando a seção está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Reduzido para detectar mais cedo
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Efeito de animação mais suave para o card ativo
  useEffect(() => {
    if (!isInView) return;

    cardsRef.current.forEach((card, index) => {
      if (card) {
        if (index === activeCard) {
          card.style.transform = 'translateY(0)';
          card.style.opacity = '1';
        } else {
          card.style.transform = 'translateY(10px)';
          card.style.opacity = '0.6';
        }
      }
    });
  }, [activeCard, isInView]);

  // Garantir que o vídeo esteja sempre em looping e sem controles
  useEffect(() => {
    // Função para iniciar o vídeo corretamente
    const setupVideo = () => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        // Configurando atributos essenciais
        video.setAttribute('playsinline', '');
        video.setAttribute('loop', '');
        video.setAttribute('muted', '');
        video.setAttribute('autoplay', '');
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        
        // Removendo controles
        video.controls = false;
        
        // Reiniciar o vídeo quando terminar
        video.onended = function() {
          video.play()
            .catch(error => console.log("Auto-play prevented:", error));
        };
        
        // Tentar iniciar o vídeo
        video.play()
          .catch(error => console.log("Auto-play prevented:", error));
      });
    };
    
    // Chamar a função quando o componente montar
    setupVideo();
    
    // E também quando a seção estiver em visualização
    if (isInView) {
      setupVideo();
    }
  }, [isInView]);

  return (
    <section
      id="Diferenciais"
      ref={sectionRef}
      className="w-full min-h-screen flex items-center relative bg-arcadia-dark overflow-hidden py-12 md:py-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt="background"
          src="/bg-star.svg"
          className="object-cover w-full h-full absolute top-0 left-0 opacity-50 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arcadia-dark to-arcadia-dark/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile View */}
        <div className="md:hidden">
          <div className="text-center mb-8">
            <h2 className="inline-block text-3xl font-bold text-white bg-arcadia-secondary px-4 py-2 mb-6">
              Nossos Sites Possuem
            </h2>
            <div className="w-24 h-1 bg-arcadia-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative aspect-video mb-8 max-w-xs mx-auto">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              {/* Video nativo sem ReactPlayer */}
              <video
                ref={videoRef}
                src="/arco.mp4"
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
                disablePictureInPicture
                disableRemotePlayback
              />
            </div>
          </div>

          <div className="space-y-4">
            {differentials.map((item, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`p-4 rounded-lg transition-all duration-700 ease-in-out cursor-pointer ${activeCard === index ? 'bg-arcadia-dark shadow-lg border border-white/10' : 'opacity-60'}`}
                style={{
                  transition: 'all 0.7s ease',
                  borderLeft: activeCard === index ? `4px solid ${item.color}` : '4px solid transparent'
                }}
                onClick={() => setActiveCard(index)}
              >
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3"
                    style={{ backgroundColor: `${item.color}30` }}
                  >
                    <span style={{ color: item.color }}>
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white flex-1">
                    {item.title}
                  </h3>
                  <ChevronRight className={`w-5 h-5 text-white/50 transition-transform duration-500 ${activeCard === index ? 'rotate-90' : ''}`} />
                </div>

                <div className={`mt-3 overflow-hidden transition-all duration-700 ${activeCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/80 text-sm leading-relaxed pl-12">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {differentials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${activeCard === index ? 'w-6 bg-arcadia-primary' : 'bg-white/30'}`}
                onClick={() => setActiveCard(index)}
                aria-label={`Ver diferencial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left side - Video */}
            <div className="w-full">
              <div className="relative overflow-hidden rounded-lg aspect-video">
                {/* Video nativo sem ReactPlayer */}
                <video
                  src="/arco.mp4"
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  disablePictureInPicture
                  disableRemotePlayback
                />
              </div>
            </div>

            {/* Right side - Differentials */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                <span className="bg-arcadia-secondary px-6 py-3 inline-block">Nossos Sites Possuem</span>
              </h2>

              <div className="space-y-8">
                {differentials.map((item, index) => (
                  <div
                    key={index}
                    className="group hover:bg-arcadia-dark/50 p-4 rounded-lg transition-all duration-500 cursor-pointer"
                    style={{ borderLeft: `4px solid ${item.color}` }}
                    onClick={() => setActiveCard(index)}
                  >
                    <div className="flex gap-4 items-start">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <span style={{ color: item.color }}>
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-arcadia-primary transition-colors duration-500">
                          {item.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < differentials.length - 1 && (
                      <div className="border-b border-white/20 mt-6 group-hover:border-white/10 transition-colors duration-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;