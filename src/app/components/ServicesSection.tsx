import { motion } from "motion/react";
import { Eye, Sparkles, Clock, ChevronRight } from "lucide-react";
import { useInView } from "./hooks/useInView";

const services = [
  {
    icon: Eye,
    title: "Cils à Cils",
    description: "Pose d'un cil synthétique sur chaque cil naturel. Un résultat élégant et naturel qui sublime votre regard au quotidien.",
    duration: "2h30",
    price: "60€",
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Pose Y Brésilienne",
    description: "Technique brésilienne innovante en Y pour un effet volumineux et léger. Un regard intense avec un rendu spectaculaire.",
    duration: "2h00",
    price: "80€",
    popular: true,
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 bg-[#FFFFFF]" ref={ref}>
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
            Nos Prestations
          </span>
          <h2
            className="font-['Playfair_Display'] text-[#000000] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            Des extensions pour chaque{" "}
            <span className="text-[#D4AF37]">style</span>
          </h2>
          <p
            className="font-['Poppins'] text-[#666666] max-w-xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Chaque regard est unique. Nos expertes vous conseillent pour trouver la pose parfaite.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative group p-10 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2 cursor-pointer ${
                  service.popular
                    ? "bg-[#000000] border-[#000000]"
                    : "bg-[#FFFFFF] border-[#F8F6F0] hover:border-[#D4AF37]/30"
                }`}
              >
                {service.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#000000] px-4 py-1 rounded-full font-['Poppins']"
                    style={{ fontSize: "0.688rem", fontWeight: 500, letterSpacing: "0.05em" }}
                  >
                    POPULAIRE
                  </div>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    service.popular
                      ? "bg-[#D4AF37]/20"
                      : "bg-[#F8F6F0] group-hover:bg-[#D4AF37]/10"
                  }`}
                >
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>

                <h3
                  className={`font-['Playfair_Display'] mb-3 ${
                    service.popular ? "text-white" : "text-[#000000]"
                  }`}
                  style={{ fontSize: "1.5rem", fontWeight: 600 }}
                >
                  {service.title}
                </h3>

                <p
                  className={`font-['Poppins'] mb-6 ${
                    service.popular ? "text-white/70" : "text-[#666666]"
                  }`}
                  style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.7 }}
                >
                  {service.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#C9A96E]" />
                  <span
                    className={`font-['Poppins'] ${service.popular ? "text-white/60" : "text-[#666666]"}`}
                    style={{ fontSize: "0.813rem", fontWeight: 400 }}
                  >
                    {service.duration}
                  </span>
                </div>

                <div className={`flex items-center justify-between pt-4 border-t ${service.popular ? "border-white/10" : "border-[#F8F6F0]"}`}>
                  <span
                    className="font-['Poppins'] text-[#D4AF37]"
                    style={{ fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    {service.price}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                      service.popular ? "text-white/40" : "text-[#D4AF37]/40"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
