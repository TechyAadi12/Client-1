import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/content";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-xl group-hover:scale-105 transition-transform duration-300">
              SD
            </div>
            <div>
              <h1 className={`font-display font-bold text-2xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-primary'}`}>
                Shyam Darbar
              </h1>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`font-medium transition-colors duration-200 hover:text-primary ${
                      scrolled ? "text-gray-700" : "text-gray-800"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2"
            >
              <MapPin size={18} /> Visit Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium text-lg w-full text-center py-2 hover:bg-orange-50 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
            className="bg-primary text-white px-8 py-2.5 rounded-full"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
