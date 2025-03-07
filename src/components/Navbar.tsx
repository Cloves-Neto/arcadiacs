
import { useState, useEffect } from "react";
import { Home, Info, Image, LayoutGrid, MessageSquare, Phone } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  // icon: JSX.Element;
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

  // const menuItems: MenuItem[] = [
  //   { id: "home", label: "Home", icon: <Home className={`mr-2 transition-all duration-500 ${isScrolled ? "w-4 h-4" : "w-6 h-6"}`} /> },
  //   { id: "about", label: "Sobre Nós", icon: <Info className={`mr-2 transition-all duration-500 ${isScrolled ? "w-4 h-4" : "w-6 h-6"}`} /> },
  //   { id: "portfolio", label: "Portfólio", icon: <Image className={`mr-2 transition-all duration-500 ${isScrolled ? "w-4 h-4" : "w-6 h-6"}`} /> },
  //   { id: "segments", label: "Segmentos", icon: <LayoutGrid className={`mr-2 transition-all duration-500 ${isScrolled ? "w-4 h-4" : "w-6 h-6"}`} /> },
  //   { id: "testimonials", label: "Depoimentos", icon: <MessageSquare className={`mr-2 transition-all duration-500 ${isScrolled ? "w-4 h-4" : "w-6 h-6"}`} /> },
  //   { id: "contact", label: "Contato", icon: <Phone className={`mr-2 transition-all duration-500 ${isScrolled ? "w-4 h-4" : "w-6 h-6"}`} /> },
  // ];
  const menuItems: MenuItem[] = [
    { id: "Inicio", label: "Inicio" },
    { id: "Sobre", label: "Sobre"},
    { id: "Diferenciais", label: "Diferenciais"},
    { id: "Portifolio", label: "Portifolio"},
    { id: "Segmentos", label: "Segmentos"},
    // { id: "contact", label: "Contato"},
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden bg-arcadia-dark`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className={`transition-all duration-500 flex items-center w-24 h-14`}>
            <img
              src="/arcadia-logo.svg"
              alt="Arcadia Logo"
              className="object-fill scale-150"
            />
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
                  isScrolled ? "text-sm" : "text-lg"
                }`}
              >
                {/* {item.icon} */}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-arcadia-white">
            <span className="hidden">button</span>
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
