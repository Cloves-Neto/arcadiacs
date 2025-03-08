

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.link/o3eofo"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <img alt="imagem de logo whatsapp" className="w-10 h-10 object-cover" src="/whatsapp-icon.svg"/>
    </a>
  );
};

export default WhatsAppButton;
