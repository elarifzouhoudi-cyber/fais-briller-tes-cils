import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "A Propos", href: "#a-propos" },
  { label: "Galerie", href: "#galerie" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Temoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="#accueil"
              onClick={(e) => { e.preventDefault(); scrollTo("#accueil"); }}
              className={`text-lg lg:text-xl tracking-wide transition-colors ${scrolled ? "text-[#000000]" : "text-white"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Fais Briller Tes Cils
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-[0.85rem] tracking-wide transition-colors hover:text-[#D4AF37] ${scrolled ? "text-gray-700" : "text-white/90"}`}
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+33616745074"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37] text-black text-[0.85rem] hover:bg-[#C9A96E] transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Phone className="w-3.5 h-3.5" />
                Prendre RDV
              </a>
            </div>

            <button
              className={`lg:hidden p-2 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-white text-2xl hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              href="tel:+33616745074"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-black mt-4"
              style={{ fontWeight: 600 }}
            >
              <Phone className="w-4 h-4" />
              +33 6 16 74 50 74
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
