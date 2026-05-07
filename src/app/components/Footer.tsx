import { Camera, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h3
              className="text-white mb-4 text-xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Fais Briller Tes Cils
            </h3>
            <p className="text-white/50 mb-6 max-w-xs text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Lash Artist certifiee a Nimes. Extensions cils a cils et Y bresilienne. Resultats naturels et durables.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                Nimes, 30000 Gard
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+33616745074" className="hover:text-white transition-colors">
                  +33 6 16 74 50 74
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="https://www.instagram.com/fais_briller_tescils?igsh=MXJlN2F1aDA4czlyOQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @fais_briller_tescils
                </a>
              </div>
            </div>

            <a
              href="https://www.instagram.com/fais_briller_tescils?igsh=MXJlN2F1aDA4czlyOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 w-10 h-10 rounded-xl bg-white/5 border border-white/10 justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all"
              aria-label="Instagram"
            >
              <Camera className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Prestations</h4>
            <ul className="space-y-3">
              {[
                { label: "Cils a Cils — 60€", href: "#services" },
                { label: "Y Bresilienne — 80€", href: "#services" },
                { label: "Remplissage", href: "#tarifs" },
                { label: "Depose", href: "#tarifs" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "A Propos", href: "#a-propos" },
                { label: "Galerie", href: "#galerie" },
                { label: "Temoignages", href: "#temoignages" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; 2026 Fais Briller Tes Cils — Nimes. Tous droits reserves.
          </p>
          <p className="text-white/20 text-xs">
            Lash Artist Certifiee | Nimes, Gard (30)
          </p>
        </div>
      </div>
    </footer>
  );
}
