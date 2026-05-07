import { useInView } from "./hooks/useInView";
import { Clock, Check } from "lucide-react";

const services = [
  {
    title: "Cils a Cils",
    subtitle: "Extension classique",
    price: "60",
    duration: "2h30",
    description:
      "La technique la plus naturelle. Chaque extension est posee individuellement sur chaque cil naturel pour un resultat subtil et elegant qui se fond parfaitement avec vos cils.",
    features: [
      "Resultat 100% naturel",
      "Dure 3 a 4 semaines",
      "Ideal pour debutantes",
      "Retouche possible",
    ],
    dark: false,
    popular: false,
  },
  {
    title: "Pose Y Bresilienne",
    subtitle: "Volume russe leger",
    price: "80",
    duration: "2h",
    description:
      "La technique Y bresilienne permet d'obtenir un volume discret et glamour. Deux extensions en forme de Y sont posees sur chaque cil naturel pour un regard expressif.",
    features: [
      "Volume naturel et chic",
      "Regard plus intense",
      "Dure 3 a 5 semaines",
      "Effet wow garanti",
    ],
    dark: true,
    popular: true,
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-24 bg-[#F8F6F0]" ref={ref as React.Ref<HTMLElement>}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-[#D4AF37] text-[0.8rem] tracking-[0.2em] uppercase mb-3 block"
            style={{ fontWeight: 600 }}
          >
            Nos Prestations
          </span>
          <h2
            className="text-black mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            }}
          >
            Choisissez Votre Technique
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: "1rem", fontWeight: 300 }}>
            Deux techniques expertement maitrisees pour sublimer votre regard naturellement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`relative rounded-3xl p-8 transition-all duration-700 ${
                service.dark ? "bg-black text-white" : "bg-white text-black shadow-sm border border-gray-100"
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {service.popular && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-[#D4AF37] text-black rounded-full text-[0.7rem] tracking-wide" style={{ fontWeight: 700 }}>
                  POPULAIRE
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`text-[0.75rem] tracking-[0.15em] uppercase mb-2 ${service.dark ? "text-[#D4AF37]" : "text-[#C9A96E]"}`}
                  style={{ fontWeight: 600 }}
                >
                  {service.subtitle}
                </div>
                <h3
                  className="text-2xl mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                >
                  {service.title}
                </h3>
                <div className="flex items-center gap-3 mt-4">
                  <span
                    className={`text-4xl ${service.dark ? "text-[#D4AF37]" : "text-black"}`}
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    {service.price}€
                  </span>
                  <div className={`flex items-center gap-1 text-sm ${service.dark ? "text-white/50" : "text-gray-400"}`}>
                    <Clock className="w-3.5 h-3.5" />
                    {service.duration}
                  </div>
                </div>
              </div>

              <p
                className={`text-sm mb-6 leading-relaxed ${service.dark ? "text-white/70" : "text-gray-500"}`}
                style={{ fontWeight: 300 }}
              >
                {service.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        service.dark ? "bg-[#D4AF37]" : "bg-[#D4AF37]/15"
                      }`}
                    >
                      <Check className={`w-3 h-3 ${service.dark ? "text-black" : "text-[#D4AF37]"}`} />
                    </div>
                    <span className={service.dark ? "text-white/80" : "text-gray-600"}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+33616745074"
                className={`block w-full text-center py-3.5 rounded-full text-sm transition-all hover:scale-105 ${
                  service.dark
                    ? "bg-[#D4AF37] text-black hover:bg-[#C9A96E]"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                style={{ fontWeight: 600 }}
              >
                Reserver Maintenant
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
