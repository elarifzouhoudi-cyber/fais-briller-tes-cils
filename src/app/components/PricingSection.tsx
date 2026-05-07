import { useInView } from "./hooks/useInView";
import { Check } from "lucide-react";

const pricingCards = [
  {
    name: "Cils a Cils",
    subtitle: "Extension classique",
    price: "60",
    duration: "2h30",
    dark: false,
    rows: [
      { label: "Pose complete cils a cils", price: "60€" },
      { label: "Remplissage 2 semaines", price: "40€" },
      { label: "Remplissage 3 semaines", price: "45€" },
      { label: "Depose seule", price: "20€" },
    ],
    features: ["Colles hypoallergeniques", "Extensions soie premium", "Conseil personnalise"],
  },
  {
    name: "Y Bresilienne",
    subtitle: "Volume russe leger",
    price: "80",
    duration: "2h",
    dark: true,
    rows: [
      { label: "Pose complete Y bresilienne", price: "80€" },
      { label: "Remplissage 2 semaines", price: "50€" },
      { label: "Remplissage 3 semaines", price: "55€" },
      { label: "Depose seule", price: "20€" },
    ],
    features: ["Technique volume leger", "Extensions ultra-fines", "Rendu glamour naturel"],
  },
];

export function PricingSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="tarifs" className="py-24 bg-[#F8F6F0]" ref={ref as React.Ref<HTMLElement>}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-[#D4AF37] text-[0.8rem] tracking-[0.2em] uppercase mb-3 block"
            style={{ fontWeight: 600 }}
          >
            Grille Tarifaire
          </span>
          <h2
            className="text-black mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            }}
          >
            Des Tarifs Transparents
          </h2>
          <p className="text-gray-500" style={{ fontWeight: 300 }}>
            Tous les tarifs incluent la consultation et les conseils d'entretien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pricingCards.map((card, i) => (
            <div
              key={card.name}
              className={`rounded-3xl overflow-hidden transition-all duration-700 ${
                card.dark ? "bg-black text-white" : "bg-white text-black shadow-sm border border-gray-100"
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`p-8 pb-6 border-b ${card.dark ? "border-white/10" : "border-gray-100"}`}>
                <div
                  className={`text-[0.75rem] tracking-[0.15em] uppercase mb-2 ${card.dark ? "text-[#D4AF37]" : "text-[#C9A96E]"}`}
                  style={{ fontWeight: 600 }}
                >
                  {card.subtitle}
                </div>
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                >
                  {card.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl ${card.dark ? "text-[#D4AF37]" : "text-black"}`}
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    {card.price}€
                  </span>
                  <span className={`text-sm ${card.dark ? "text-white/50" : "text-gray-400"}`}>
                    pose complete
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-3 mb-6">
                  {card.rows.map((row) => (
                    <div
                      key={row.label}
                      className={`flex justify-between text-sm py-2 border-b ${
                        card.dark ? "border-white/5 text-white/80" : "border-gray-50 text-gray-600"
                      }`}
                    >
                      <span style={{ fontWeight: 300 }}>{row.label}</span>
                      <span
                        className={card.dark ? "text-[#D4AF37]" : "text-black"}
                        style={{ fontWeight: 600 }}
                      >
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {card.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 ${card.dark ? "text-[#D4AF37]" : "text-[#D4AF37]"}`} />
                      <span className={card.dark ? "text-white/70" : "text-gray-500"} style={{ fontWeight: 300 }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+33616745074"
                  className={`block w-full text-center py-3.5 rounded-full text-sm transition-all hover:scale-105 ${
                    card.dark
                      ? "bg-[#D4AF37] text-black hover:bg-[#C9A96E]"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  Prendre Rendez-vous
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
