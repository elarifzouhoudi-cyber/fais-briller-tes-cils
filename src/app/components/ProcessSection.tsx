import { motion } from "motion/react";
import { MessageCircle, Search, Sparkles, Heart } from "lucide-react";
import { useInView } from "./hooks/useInView";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Consultation",
    description: "Échange personnalisé pour comprendre vos envies et analyser vos cils naturels.",
  },
  {
    icon: Search,
    step: "02",
    title: "Diagnostic",
    description: "Choix de la courbure, longueur et épaisseur adaptées à votre morphologie.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "La Pose",
    description: "Installation confortable, pose minutieuse cil par cil dans un cadre apaisant.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Le Résultat",
    description: "Un regard sublime et naturel. Conseils d'entretien pour une tenue optimale.",
  },
];

export function ProcessSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#F8F6F0]" ref={ref}>
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
            Comment ça marche
          </span>
          <h2
            className="font-['Playfair_Display'] text-[#000000] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            Votre expérience en{" "}
            <span className="text-[#D4AF37]">4 étapes</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-[#D4AF37]/15" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center relative"
              >
                {/* Circle with icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#D4AF37]/20 flex items-center justify-center shadow-lg shadow-[#D4AF37]/5 relative z-10">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center z-20"
                  >
                    <span className="font-['Poppins'] text-[#D4AF37]" style={{ fontSize: "0.688rem", fontWeight: 700 }}>
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3
                  className="font-['Playfair_Display'] text-[#000000] mb-3"
                  style={{ fontSize: "1.25rem", fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-['Poppins'] text-[#666666] max-w-xs mx-auto"
                  style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.7 }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
