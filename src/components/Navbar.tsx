
import { useState, useEffect } from "react";
import { Home, Info, Image, LayoutGrid, MessageSquare, Phone } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: JSX.Element;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4 mr-2" /> },
    { id: "about", label: "Sobre Nós", icon: <Info className="w-4 h-4 mr-2" /> },
    { id: "portfolio", label: "Portfólio", icon: <Image className="w-4 h-4 mr-2" /> },
    { id: "segments", label: "Segmentos", icon: <LayoutGrid className="w-4 h-4 mr-2" /> },
    { id: "testimonials", label: "Depoimentos", icon: <MessageSquare className="w-4 h-4 mr-2" /> },
    { id: "contact", label: "Contato", icon: <Phone className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-arcadia-dark/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/2b395b57-f327-41fb-8761-09c0cb7c82af.png" 
              alt="Arcadia Logo" 
              className={`transition-all duration-500 ${
                isScrolled ? "h-8" : "h-16"
              }`}
            />
            <span className={`font-bold text-arcadia-white transition-all duration-500 ${
              isScrolled ? "text-xl" : "text-3xl"
            }`}>
              ARCADIA
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center font-bold capitalize px-4 py-2 text-arcadia-white hover:text-arcadia-secondary transition-all duration-500 ${
                  activeSection === item.id ? "text-arcadia-secondary" : ""
                } ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

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
