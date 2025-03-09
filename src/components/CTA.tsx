import React, { useState } from 'react';
import { IMaskInput } from "react-imask";
import { Button } from './ui/button';
import { Rocket } from 'lucide-react';

const ContactCTA = () => {
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full mx-auto rounded-lg bg-arcadia-primary p-6 text-white text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Transforme sua visão em realidade!</h2>

      <p className="text-sm md:text-base mb-4">
      Encontre o plano exclusivo para você! Ainda com dúvidas? <br />
      Deixe-nos ajudar a escolher a melhor opção para o seu sucesso!
      </p>


      <form onSubmit={handleSubmit} className="flex w-52 mx-auto gap-4 flex-col md:flex-row gap-2 items-center justify-center mb-4">
          <label htmlFor="telefone" className='hidden'>Telefone</label>
          <IMaskInput

            id='telefone'
            mask="(00)00000-0000"
            placeholder="Seu melhor telefone..."
            className="px-4 py-2 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30 w-full md:w-auto flex-grow text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"

          />

          <Button
            type='submit'
            className="h-6 text-sm px-6 w-40 md:h-8 md:px-8
             bg-arcadia-white hover:bg-arcadia-dark/80 hover:text-white
             text-arcadia-primary py-6 rounded-md md:text-sm
             font-medium shadow-lg hover:shadow-xl
             transition-all duration-300 animate-fade-in-slow"
          >
              <Rocket className="w-3 h-3 mr-2 md:h-5 md:w-5 flex items-center justify-center"/>
              Vamos começar!
          </Button>

      </form>

    </div>
  );
};

export default ContactCTA;