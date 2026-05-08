import { motion } from "motion/react";
import { ArrowRight, Star, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const HERO_IMG = "https://images.unsplash.com/photo-1762522903557-891c8dc11f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoJTIwZXh0ZW5zaW9ucyUyMGJlYXV0eSUyMHNhbG9uJTIwbHV4dXJ5fGVufDF8fHx8MTc3MDg4NjQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={HERO_IMG}
          alt="Salon de pose de cils premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-[#000000]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-[#C9A96E]/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
          >
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-white/90 font-['Poppins']" style={{ fontSize: "0.813rem", fontWeight: 400 }}>
              N&deg;1 des extensions de cils &mdash; Aix-en-Provence
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-['Playfair_Display'] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.15 }}
          >
            Sublimez votre{" "}
            <span className="text-[#D4AF37]">regard</span>{" "}
            avec nos experts
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 font-['Poppins'] mb-8 max-w-lg"
            style={{ fontSize: "1.125rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Extensions de cils sur-mesure, dans un cadre luxueux et apaisant.
            Des r&eacute;sultats naturels &agrave; spectaculaires, r&eacute;alis&eacute;s par des expertes certifi&eacute;es.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#tarifs"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#000000] px-8 py-4 rounded-full hover:bg-[#C9A96E] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/30 font-['Poppins'] no-underline group"
              style={{ fontSize: "1rem", fontWeight: 500 }}
            >
              R&eacute;server maintenant
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#D4AF37]/40 text-white px-8 py-4 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300 font-['Poppins'] no-underline backdrop-blur-sm"
              style={{ fontSize: "1rem", fontWeight: 400 }}
            >
              D&eacute;couvrir nos prestations
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6 sm:gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-white/80 font-['Poppins']" style={{ fontSize: "0.813rem" }}>
                4.9/5 (380+ avis)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80 font-['Poppins']" style={{ fontSize: "0.813rem" }}>
                +5 000 poses r&eacute;alis&eacute;es
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80 font-['Poppins']" style={{ fontSize: "0.813rem" }}>
                Certifi&eacute;es &amp; dipl&ocirc;m&eacute;es
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-[#D4AF37]/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#D4AF37]/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
