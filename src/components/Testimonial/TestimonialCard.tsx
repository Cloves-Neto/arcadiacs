// components/TestimonialCard.tsx
import React, { ReactNode } from 'react';

interface TestimonialCardProps {
  initial: string;
  index: number;
  totalCards: number;
  children: ReactNode;
  orbitSize?: number;
  cardSize?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  initial,
  index,
  totalCards,
  children,
  orbitSize = 450,
  cardSize = 20
}) => {
  // Calcular o atraso da animação com base no índice e no total de cartões
  const delayFactor = (index / totalCards) * 30;

  return (
    <div className="card-container absolute flex items-center justify-center z-[100]"
      style={{
        animation: `orbit 30s linear infinite`,
        animationDelay: `-${delayFactor}s`,
        width: `${cardSize}px`,
        height: `${cardSize}px`
      }}
    >
      <div className="card absolute w-24 h-24 rounded-full overflow-hidden cursor-pointer shadow-lg bg-red-600 text-white flex justify-center items-center font-bold transition-all duration-300">
        {/* Se for uma URL de imagem, renderiza uma imagem */}
        {initial.startsWith('/') ? (
          <img
            src={initial}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback para a primeira letra do nome se a imagem falhar
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.parentElement!.textContent = initial.charAt(1).toUpperCase();
            }}
          />
        ) : (
          // Caso contrário, mostra a letra/texto
          initial
        )}
      </div>
      <div className="card-details absolute top-1/2 left-1/2 w-[300px] bg-white rounded-lg shadow-xl p-5 z-[1000] opacity-0 transition-all duration-300 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 scale-0">
        {children}
      </div>

      <style>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(${orbitSize / 2}px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(${orbitSize / 2}px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};