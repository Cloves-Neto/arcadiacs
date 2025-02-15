
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
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
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/2b395b57-f327-41fb-8761-09c0cb7c82af.png" alt="Arcadia Logo" className="h-8" />
            <span className="text-xl font-bold text-arcadia-dark">ARCADIA</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-arcadia-dark hover:text-arcadia-primary transition-colors ${
                  activeSection === item.id
                    ? "text-arcadia-primary font-bold"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button className="hidden md:flex bg-arcadia-primary hover:bg-arcadia-primary/90 text-white font-medium rounded-full px-6">
            (11) 96527-9056
          </Button>

          <button className="md:hidden text-arcadia-dark">
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
