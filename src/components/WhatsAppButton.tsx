
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511965279056"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
