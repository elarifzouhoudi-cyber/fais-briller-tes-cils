import { motion } from "motion/react";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const BG_IMG = "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0cmVhdG1lbnQlMjBzcGElMjByZWxheGF0aW9uJTIwd29tYW58ZW58MXx8fHwxNzcwODg2NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function BookingCTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#F8F6F0] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={BG_IMG}
              alt="Réservation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 to-[#000000]/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-12 px-6 sm:py-16 sm:px-8 lg:py-24 lg:px-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span
                  className="font-['Poppins'] text-[#C9A96E] tracking-[0.2em] uppercase mb-4 block"
                  style={{ fontSize: "0.813rem", fontWeight: 500 }}
                >
                  Prendre Rendez-vous
                </span>
                <h2
                  className="font-['Playfair_Display'] text-white mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.2 }}
                >
                  Prête à sublimer votre{" "}
                  <span className="text-[#D4AF37]">regard</span> ?
                </h2>
                <p
                  className="font-['Poppins'] text-white/70 mb-8"
                  style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
                >
                  Réservez votre séance dès maintenant et bénéficiez de -10% sur votre première pose.
                  Notre équipe vous accueille du lundi au samedi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+33616745074"
                    className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#000000] px-8 py-4 rounded-full hover:bg-[#C9A96E] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/30 font-['Poppins'] no-underline group"
                    style={{ fontSize: "1rem", fontWeight: 500 }}
                  >
                    <Phone className="w-4 h-4" />
                    06 16 74 50 74
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#D4AF37]/30 text-white px-8 py-4 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300 font-['Poppins'] no-underline"
                    style={{ fontSize: "1rem", fontWeight: 400 }}
                  >
                    <Calendar className="w-4 h-4" />
                    Voir les horaires
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
