
/**
 * @component Navbar
 * @description Barra de navegação principal com menu responsivo e highlight da seção atual
 * 
 * Features:
 * - Menu responsivo com mobile toggle
 * - Scroll tracking para highlight da seção atual
 * - Backdrop blur em scroll
 * - Animações suaves
 */
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

/** Interface para items do menu */
interface MenuItem {
  id: string;
  label: string;
}

const Navbar = () => {
  // Estado para controle de scroll e seção ativa
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /** 
   * Hook para tracking de scroll e atualização da seção ativa
   * Adiciona offset para melhor precisão
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** 
   * Função para scroll suave até a seção selecionada
   * @param sectionId - ID da seção destino
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /** Array com items do menu para fácil manutenção */
  const menuItems: MenuItem[] = [
    { id: "home", label: "HOME" },
    { id: "about", label: "SOBRE NÓS" },
    { id: "portfolio", label: "PORTFÓLIO" },
    { id: "segments", label: "SEGMENTOS" },
    { id: "testimonials", label: "DEPOIMENTOS" },
    { id: "contact", label: "CONTATO" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-arcadia-dark/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2b395b57-f327-41fb-8761-09c0cb7c82af.png" 
              alt="Arcadia Logo" 
              className="h-8" 
            />
            <span className="text-xl font-bold text-arcadia-white">ARCADIA</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-arcadia-white hover:text-arcadia-secondary transition-colors ${
                  activeSection === item.id
                    ? "text-arcadia-secondary font-bold"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="hidden md:flex bg-arcadia-primary hover:bg-arcadia-primary/90 text-arcadia-white font-medium rounded-full px-6">
            (11) 96527-9056
          </Button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-arcadia-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
