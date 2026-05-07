import { motion } from "motion/react";
import { ChevronDown, Star } from "lucide-react";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583001809873-9c70d284d234?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-1 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
          ))}
          <span className="text-white/80 text-sm ml-2" style={{ fontWeight: 300 }}>
            4.9/5 — 380+ avis certifies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.15,
          }}
        >
          Sublimez Votre Regard,<br />
          <em>Revealez Votre Eclat</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-white/80 mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 300, lineHeight: 1.7 }}
        >
          Extensions de cils professionnelles a Nimes. Technique cils a cils et Y bresilienne.
          Certifiee Lash Artist — resultats naturels et durables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#tarifs")}
            className="px-8 py-4 bg-[#D4AF37] text-black rounded-full hover:bg-[#C9A96E] transition-all hover:scale-105"
            style={{ fontWeight: 600, fontSize: "1rem" }}
          >
            Reserver Ma Pose
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="px-8 py-4 border border-white/50 text-white rounded-full hover:bg-white/10 transition-all"
            style={{ fontWeight: 400, fontSize: "1rem" }}
          >
            Decouvrir les Prestations
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-8 mt-16 pt-10 border-t border-white/20"
        >
          {[
            { value: "5000+", label: "Poses realisees" },
            { value: "4.9/5", label: "Note moyenne" },
            { value: "8 ans", label: "d'experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[#D4AF37] text-2xl"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-xs mt-1" style={{ fontWeight: 300 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        onClick={() => scrollTo("#stats")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
