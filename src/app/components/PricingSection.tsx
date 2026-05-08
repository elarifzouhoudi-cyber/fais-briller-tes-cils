import { motion } from "motion/react";
import { Check, Star, Sparkles } from "lucide-react";
import { useInView } from "./hooks/useInView";

const pricingPlans = [
  {
    name: "Cils à Cils",
    subtitle: "Effet naturel",
    price: "60",
    description: "Un regard sublimé au naturel, élégant au quotidien",
    features: [
      "1 cil synthétique par cil naturel",
      "Durée : 2h30",
      "Tenue : 3-4 semaines",
      "Colle hypoallergénique",
      "Diagnostic personnalisé",
      "Choix courbure & longueur",
    ],
    popular: false,
    cta: "Réserver",
  },
  {
    name: "Pose Y Brésilienne",
    subtitle: "Best-seller",
    price: "80",
    description: "Volume et intensité avec la technique brésilienne en Y",
    features: [
      "Technique Y brésilienne",
      "Durée : 2h00",
      "Tenue : 3-4 semaines",
      "Colle premium longue durée",
      "Diagnostic personnalisé",
      "Effet volumineux & léger",
      "Kit entretien offert",
      "Retouche -20% sous 2 sem.",
    ],
    popular: true,
    cta: "Réserver",
  },
];

export function PricingSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="tarifs" className="py-16 sm:py-20 lg:py-32 bg-[#F8F6F0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="font-['Poppins'] text-[#D4AF37] tracking-[0.2em] uppercase mb-4 block"
            style={{ fontSize: "0.813rem", fontWeight: 500 }}
          >
            Nos Tarifs
          </span>
          <h2
            className="font-['Playfair_Display'] text-[#000000] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            Des formules pour chaque{" "}
            <span className="text-[#D4AF37]">envie</span>
          </h2>
          <p
            className="font-['Poppins'] text-[#666666] max-w-xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Tarifs transparents, sans surprise. Choisissez la formule qui vous correspond.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-xl flex flex-col ${
                plan.popular
                  ? "bg-[#000000] text-white shadow-2xl shadow-[#000000]/20 scale-[1.02] lg:scale-105"
                  : "bg-[#FFFFFF] border border-[#F8F6F0] hover:shadow-[#D4AF37]/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#D4AF37] text-[#000000] px-5 py-1.5 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-[#000000]" />
                  <span className="font-['Poppins']" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                    BEST-SELLER
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <span
                    className={`font-['Poppins'] ${plan.popular ? "text-[#D4AF37]" : "text-[#C9A96E]"}`}
                    style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}
                  >
                    {plan.subtitle.toUpperCase()}
                  </span>
                </div>
                <h3
                  className={`font-['Playfair_Display'] ${plan.popular ? "text-white" : "text-[#000000]"}`}
                  style={{ fontSize: "1.5rem", fontWeight: 600 }}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-['Playfair_Display'] ${plan.popular ? "text-[#D4AF37]" : "text-[#000000]"}`}
                    style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`font-['Poppins'] ${plan.popular ? "text-white/60" : "text-[#666666]"}`}
                    style={{ fontSize: "1rem", fontWeight: 400 }}
                  >
                    €
                  </span>
                </div>
                <p
                  className={`font-['Poppins'] mt-2 ${plan.popular ? "text-white/60" : "text-[#666666]"}`}
                  style={{ fontSize: "0.875rem", fontWeight: 300 }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-[#D4AF37]/20" : "bg-[#F8F6F0]"
                      }`}
                    >
                      <Check className="w-3 h-3 text-[#D4AF37]" />
                    </div>
                    <span
                      className={`font-['Poppins'] ${plan.popular ? "text-white/80" : "text-[#666666]"}`}
                      style={{ fontSize: "0.875rem", fontWeight: 400 }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="tel:+33616745074"
                className={`block text-center py-4 rounded-full font-['Poppins'] transition-all duration-300 no-underline ${
                  plan.popular
                    ? "bg-[#D4AF37] text-[#000000] hover:bg-[#C9A96E] hover:shadow-lg hover:shadow-[#D4AF37]/30"
                    : "bg-[#000000] text-white hover:bg-[#1a1a1a] hover:shadow-lg"
                }`}
                style={{ fontSize: "0.938rem", fontWeight: 500 }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {[
            { service: "Remplissage 2-3 semaines", price: "40-55€" },
            { service: "Dépose complète", price: "20€" },
          ].map((item) => (
            <div
              key={item.service}
              className="flex items-center justify-between bg-[#FFFFFF] rounded-xl px-6 py-4 border border-[#F8F6F0]"
            >
              <span className="font-['Poppins'] text-[#000000]" style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                {item.service}
              </span>
              <span className="font-['Poppins'] text-[#D4AF37]" style={{ fontSize: "0.938rem", fontWeight: 600 }}>
                {item.price}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
