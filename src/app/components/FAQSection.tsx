import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useInView } from "./hooks/useInView";

const faqs = [
  {
    question: "Combien de temps dure une pose complète ?",
    answer:
      "Une pose Cils à Cils dure environ 2h30 et une Pose Y Brésilienne environ 2h. Nous prenons le temps nécessaire pour un résultat parfait.",
  },
  {
    question: "Les extensions abîment-elles les cils naturels ?",
    answer:
      "Non, lorsqu'elles sont posées par des professionnelles certifiées comme les nôtres. Nous utilisons des cils adaptés au poids que vos cils naturels peuvent supporter, et des colles hypoallergéniques de qualité médicale.",
  },
  {
    question: "Quelle est la durée de tenue des extensions ?",
    answer:
      "Les extensions suivent le cycle naturel de vos cils, soit environ 3 à 4 semaines. Un remplissage est recommandé toutes les 2 à 3 semaines pour un résultat toujours impeccable.",
  },
  {
    question: "Quelle est la différence entre Cils à Cils et Pose Y Brésilienne ?",
    answer:
      "La pose Cils à Cils consiste à appliquer un cil synthétique sur chaque cil naturel pour un effet naturel et élégant. La Pose Y Brésilienne utilise une technique innovante en forme de Y qui offre plus de volume et d'intensité, tout en restant légère et confortable.",
  },
  {
    question: "Puis-je me maquiller avec des extensions ?",
    answer:
      "Oui, mais nous recommandons d'éviter les mascaras waterproof et les démaquillants à base d'huile. Avec nos extensions, vous n'aurez de toute façon plus besoin de mascara !",
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer:
      "Nous utilisons exclusivement des cils synthétiques premium de qualité médicale, des colles hypoallergéniques certifiées et testées dermatologiquement. Tous nos produits sont conformes aux normes européennes.",
  },
  {
    question: "Comment préparer ma première pose ?",
    answer:
      "Venez sans maquillage sur les yeux, sans mascara. Évitez les crèmes grasses autour des yeux le jour de la pose. Nous vous fournirons toutes les instructions d'entretien après la séance.",
  },
];

export function FAQSection() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Questions Fréquentes
          </span>
          <h2
            className="font-['Playfair_Display'] text-[#000000] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            Tout savoir sur nos{" "}
            <span className="text-[#D4AF37]">extensions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-[#D4AF37]/20 bg-[#F8F6F0] shadow-sm"
                  : "border-[#F8F6F0] bg-white hover:border-[#D4AF37]/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-transparent border-none cursor-pointer"
              >
                <span
                  className={`font-['Poppins'] pr-4 transition-colors ${
                    openIndex === index ? "text-[#D4AF37]" : "text-[#000000]"
                  }`}
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#D4AF37]" : "text-[#666666]"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60" : "max-h-0"
                }`}
              >
                <p
                  className="px-6 pb-6 font-['Poppins'] text-[#666666]"
                  style={{ fontSize: "0.938rem", fontWeight: 300, lineHeight: 1.8 }}
                >
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
