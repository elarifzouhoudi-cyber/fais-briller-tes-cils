import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Cils à Cils", href: "#services" },
    { label: "Pose Y Brésilienne", href: "#services" },
    { label: "Remplissage", href: "#tarifs" },
    { label: "Dépose", href: "#tarifs" },
  ],
  salon: [
    { label: "À propos", href: "#accueil" },
    { label: "Galerie", href: "#galerie" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Avis clients", href: "#avis" },
    { label: "FAQ", href: "#faq" },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#000000] pt-12 sm:pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span
              className="font-['Playfair_Display'] text-white block mb-4"
              style={{ fontSize: "1.5rem", fontWeight: 600 }}
            >
              Fais Briller <span className="text-[#D4AF37]">Tes Cils</span>
            </span>
            <p
              className="font-['Poppins'] text-white/50 mb-6"
              style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.7 }}
            >
              Le salon de référence pour les extensions de cils à Aix-en-Provence. Sublimez votre regard avec nos expertes certifiées.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/fais_briller_tescils?igsh=MXJlN2F1aDA4czlyOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-[#D4AF37]/20 flex items-center justify-center text-white/60 hover:text-[#000000] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-[#D4AF37]/20 flex items-center justify-center text-white/60 hover:text-[#000000] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="font-['Poppins'] text-white mb-4"
              style={{ fontSize: "0.938rem", fontWeight: 600 }}
            >
              Prestations
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-['Poppins'] text-white/50 hover:text-[#D4AF37] transition-colors bg-transparent border-none cursor-pointer p-0"
                    style={{ fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Salon Links */}
          <div>
            <h4
              className="font-['Poppins'] text-white mb-4"
              style={{ fontSize: "0.938rem", fontWeight: 600 }}
            >
              Le Salon
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.salon.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-['Poppins'] text-white/50 hover:text-[#D4AF37] transition-colors bg-transparent border-none cursor-pointer p-0"
                    style={{ fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-['Poppins'] text-white mb-4"
              style={{ fontSize: "0.938rem", fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="font-['Poppins'] text-white/50" style={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 }}>
                  245 Rue de Lagremeuse<br />13290 Aix-en-Provence
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+33616745074" className="font-['Poppins'] text-white/50 hover:text-[#D4AF37] transition-colors no-underline" style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                  06 16 74 50 74
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:contact@faisbrillertescils.com" className="font-['Poppins'] text-white/50 hover:text-[#D4AF37] transition-colors no-underline" style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                  contact@faisbrillertescils.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Poppins'] text-white/30" style={{ fontSize: "0.813rem", fontWeight: 400 }}>
            &copy; 2026 Fais Briller Tes Cils. Tous droits réservés.
          </p>
          <p className="font-['Poppins'] text-white/30 flex items-center gap-1" style={{ fontSize: "0.813rem", fontWeight: 400 }}>
            Fait avec <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" /> à Aix-en-Provence
          </p>
        </div>
      </div>
    </footer>
  );
}
