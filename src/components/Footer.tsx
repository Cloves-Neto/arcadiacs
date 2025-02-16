
/**
 * @component Footer
 * @description Rodapé principal com informações de contato, links rápidos e redes sociais
 * 
 * Features:
 * - Grid responsivo com 4 colunas
 * - Links para redes sociais
 * - Informações de contato
 * - Links rápidos para seções
 * - Efeitos decorativos de background
 */
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-arcadia-white relative overflow-hidden">
      {/* Efeitos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-arcadia-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-arcadia-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 py-16 relative">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Sobre */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/2b395b57-f327-41fb-8761-09c0cb7c82af.png" 
                alt="Arcadia Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">ARCADIA</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Transformando ideias em experiências digitais memoráveis através de soluções web inovadoras.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {["Home", "Sobre Nós", "Portfólio", "Segmentos", "Depoimentos", "Contato"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-arcadia-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-arcadia-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  São Paulo, SP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-arcadia-primary flex-shrink-0" />
                <span className="text-gray-400">(11) 96527-9056</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-arcadia-primary flex-shrink-0" />
                <span className="text-gray-400">contato@arcadia.com.br</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-arcadia-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-arcadia-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-arcadia-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior com copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Arcadia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-arcadia-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-arcadia-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
