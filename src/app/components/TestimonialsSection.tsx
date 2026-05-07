import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    date: "Janvier 2026",
    rating: 5,
    technique: "Y Bresilienne",
    text: "Absolument ravie ! Ma pose Y bresilienne est magnifique, tres naturelle. Je recois des compliments tous les jours. La prestataire est tres professionnelle et a l'ecoute. Je reviendrai sans hesiter !",
  },
  {
    name: "Camille R.",
    date: "Decembre 2025",
    rating: 5,
    technique: "Cils a Cils",
    text: "Premiere experience en extensions et je ne regrette absolument pas. Tres bons conseils, pose soignee, cadre agreable. Le resultat est exactement ce que je voulais : naturel et sublimant.",
  },
  {
    name: "Laure D.",
    date: "Novembre 2025",
    rating: 5,
    technique: "Y Bresilienne",
    text: "Je suis cliente depuis 2 ans et je ne changerais pour rien au monde. Professionnalisme irreprochable, produits de qualite, resultat toujours parfait. La meilleure lash artist de Nimes !",
  },
  {
    name: "Manon T.",
    date: "Octobre 2025",
    rating: 5,
    technique: "Cils a Cils",
    text: "Super experience du debut a la fin. Accueil chaleureux, explication detaillee de la technique, pose impeccable. Mes cils sont magnifiques et ont tenu 4 semaines !",
  },
  {
    name: "Julie B.",
    date: "Septembre 2025",
    rating: 5,
    technique: "Y Bresilienne",
    text: "Je recommande vivement ! La pose est rapide et confortable. Le resultat est naturel mais transformateur. On voit la difference sans que ce soit exagere. Parfait pour tous les jours.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useInView();

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="temoignages" className="py-24 bg-black" ref={ref as React.Ref<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-[#D4AF37] text-[0.8rem] tracking-[0.2em] uppercase mb-3 block"
            style={{ fontWeight: 600 }}
          >
            Temoignages
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            }}
          >
            Ce Que Disent Nos Clientes
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            ))}
            <span className="text-white/50 text-sm ml-2">4.9/5 — 380+ avis</span>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((t, i) => (
              <AnimatePresence key={`${current}-${i}`} mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${i === 2 ? "hidden lg:block" : ""}`}
                >
                  <Quote className="w-6 h-6 text-[#D4AF37]/40 mb-4" />
                  <p className="text-white/80 text-sm leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm font-semibold">{t.name}</div>
                      <div className="text-white/40 text-xs mt-0.5">
                        {t.technique} • {t.date}
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-[#D4AF37] w-6" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
