import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Galerie", href: "#galerie" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Avis", href: "#avis" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-[#D4AF37]/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => scrollToSection("#accueil")}
            >
              <span
                className={`font-['Playfair_Display'] tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-[#000000]" : "text-white"
                }`}
                style={{ fontSize: "1.5rem", fontWeight: 600 }}
              >
                Fais Briller{" "}
                <span className="text-[#D4AF37]">Tes Cils</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-['Poppins'] relative group transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                    isScrolled
                      ? "text-[#000000] hover:text-[#D4AF37]"
                      : "text-white/90 hover:text-white"
                  }`}
                  style={{ fontSize: "0.875rem", fontWeight: 400 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex items-center gap-3"
            >
              <a
                href="tel:+33616745074"
                className="flex items-center gap-2 bg-[#D4AF37] text-[#000000] px-5 py-2.5 rounded-full hover:bg-[#C9A96E] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 font-['Poppins'] no-underline"
                style={{ fontSize: "0.875rem", fontWeight: 500 }}
              >
                <Phone className="w-4 h-4" />
                Rendez-vous
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors bg-transparent border-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-[#000000]" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-[#000000]" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-3 px-4 text-[#000000] hover:text-[#D4AF37] hover:bg-[#F8F6F0] rounded-xl transition-all font-['Poppins'] bg-transparent border-none cursor-pointer"
                  style={{ fontSize: "1.125rem", fontWeight: 400 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="tel:+33616745074"
                className="flex items-center justify-center gap-2 mt-4 bg-[#D4AF37] text-[#000000] py-3 rounded-full font-['Poppins'] no-underline"
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                <Phone className="w-4 h-4" />
                Prendre Rendez-vous
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
