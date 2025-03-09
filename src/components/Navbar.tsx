import { useState, useEffect } from "react";
import { Home, Info, Image, LayoutGrid, MessageSquare, Phone, Menu, X } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems: MenuItem[] = [
    { id: "Inicio", label: "Inicio" },
    { id: "Sobre", label: "Sobre"},
    { id: "Diferenciais", label: "Diferenciais"},
    { id: "Portifolio", label: "Portifolio"},
    { id: "Segmentos", label: "Segmentos"},
    { id: "Price", label: "Planos"},
  ];

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed px-6 top-0 left-0 right-0 z-[9999] transition-all duration-500 overflow-hidden bg-arcadia-dark
        ${isScrolled ? "border-b border-b-gray-500" : "border-b-0"}`
      }>
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className={`transition-all duration-500 flex items-center`}>
              <img
                src="/arcadia-logo.svg"
                alt="Arcadia Logo"
                className="object-cover w-44 h-20 -ml-4"
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
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-arcadia-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-arcadia-dark z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
              className="text-arcadia-white hover:text-arcadia-secondary"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col mt-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center font-bold capitalize px-6 py-4 text-arcadia-white hover:text-arcadia-secondary hover:bg-gray-800 transition-all ${
                  activeSection === item.id ? "text-arcadia-secondary bg-gray-800/50" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;