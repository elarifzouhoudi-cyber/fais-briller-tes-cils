import { motion } from "motion/react";
import { Shield, Heart, Gem, Users } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const IMG_SALON = "https://images.unsplash.com/photo-1652868771337-0821db91da16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yJTIwcGlua3xlbnwxfHx8fDE3NzA4ODY0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_CLOSEUP = "https://images.unsplash.com/photo-1613627121937-076300643db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMGNsb3NlZCUyMGV5ZXMlMjBleWVsYXNoZXMlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDg4NjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const features = [
  {
    icon: Shield,
    title: "Produits Premium",
    description: "Colles et cils hypoallergéniques de qualité médicale, certifiés et testés dermatologiquement.",
  },
  {
    icon: Heart,
    title: "Confort Absolu",
    description: "Un cadre luxueux, apaisant et une attention particulière pour chaque cliente.",
  },
  {
    icon: Gem,
    title: "Technique Experte",
    description: "Nos ciliéristes sont formées aux techniques les plus avancées du marché.",
  },
  {
    icon: Users,
    title: "Sur-Mesure",
    description: "Chaque pose est adaptée à votre morphologie, vos cils naturels et vos envies.",
  },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#F8F6F0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#000000]/10">
                <ImageWithFallback
                  src={IMG_SALON}
                  alt="Intérieur du salon"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Floating secondary image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 lg:-right-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                <ImageWithFallback
                  src={IMG_CLOSEUP}
                  alt="Pose de cils en détail"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 border-2 border-[#D4AF37]/20 rounded-3xl hidden sm:block" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-6 -right-2 lg:top-8 lg:right-4 bg-[#000000] text-white rounded-2xl p-4 shadow-lg"
            >
              <span className="font-['Playfair_Display'] block text-center text-[#D4AF37]" style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>
                8+
              </span>
              <span className="font-['Poppins'] block text-center text-white/80" style={{ fontSize: "0.688rem", fontWeight: 400 }}>
                ans d'exp.
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span
              className="font-['Poppins'] text-[#D4AF37] tracking-[0.2em] uppercase mb-4 block"
              style={{ fontSize: "0.813rem", fontWeight: 500 }}
            >
              Pourquoi Nous Choisir
            </span>
            <h2
              className="font-['Playfair_Display'] text-[#000000] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.2 }}
            >
              L'excellence au service de{" "}
              <span className="text-[#D4AF37]">votre beauté</span>
            </h2>
            <p
              className="font-['Poppins'] text-[#666666] mb-10"
              style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
            >
              Depuis plus de 8 ans, notre salon est devenu la référence en matière d'extensions de cils à Aix-en-Provence.
              Notre équipe passionnée allie savoir-faire technique et sens artistique pour sublimer chaque regard.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-['Poppins'] text-[#000000] mb-1" style={{ fontSize: "0.938rem", fontWeight: 600 }}>
                        {feature.title}
                      </h4>
                      <p className="font-['Poppins'] text-[#666666]" style={{ fontSize: "0.813rem", fontWeight: 300, lineHeight: 1.6 }}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
