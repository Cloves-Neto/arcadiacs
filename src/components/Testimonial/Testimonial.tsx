// components/Testimonial.tsx
import React from 'react';
import { Icon } from "@iconify/react";

interface TestimonialProps {
  name: string;
  date: string;
  rating: number;
  content: string;
  initial: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ name, date, rating, content, initial }) => {
  // Função para exibir o conteúdo do avatar (imagem ou inicial)
  const renderAvatar = () => {
    if (initial.startsWith('/')) {
      return (
        <img
          src={initial}
          alt={`Avatar de ${name}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback para a primeira letra do nome se a imagem falhar
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.parentElement!.innerHTML = name.charAt(0);
          }}
        />
      );
    } else {
      return initial;
    }
  };

  return (
    <>
      <div className="flex items-center mb-2">
        <div className="w-[30px] h-[30px] rounded-full bg-red-600 text-white flex justify-center items-center text-xl font-bold mr-4 overflow-hidden">
          {renderAvatar()}
        </div>
        <div className="flex-1">
          <div className="font-bold text-gray-800 mb-1">{name}</div>
          <div className="text-xs text-gray-500">{date}</div>
        </div>
      </div>
      <div className="text-yellow-400 my-2 flex">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            icon="material-symbols:star-rounded"
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
            width="20"
          />
        ))}
      </div>

      <div className="text-gray-600 leading-relaxed">{content}</div>
    </>
  );
};