import { useState } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Cliente fidèle depuis 2 ans",
    text: "Je n'ai jamais eu d'aussi belles extensions ! Le salon est magnifique, l'équipe est aux petits soins. Mes cils tiennent incroyablement bien. Je recommande à 200% !",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1758845986246-9588d6dc4762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzbWlsZSUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NzA5MzE1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Camille D.",
    role: "Pose Y Brésilienne",
    text: "Résultat époustouflant ! Mes amies me demandent toutes où je fais mes cils. L'ambiance est si relaxante que je m'endors à chaque séance. Un vrai moment de bonheur.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1768981402304-b5857fe32fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwZWxlZ2FudCUyMGJydW5ldHRlJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcwOTMxNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Léa B.",
    role: "Cils à Cils régulier",
    text: "Professionnalisme, douceur et résultat au top ! La ciliériste a pris le temps de comprendre exactement ce que je voulais. Le mapping est parfait pour ma forme d'yeux.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1671766013824-22d2bbbac15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJsb25kZSUyMHdvbWFuJTIwcG9ydHJhaXQlMjBvdXRkb29yJTIwc21pbGV8ZW58MXx8fHwxNzcwOTMxNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Marie-Claire R.",
    role: "Pose classique",
    text: "Enfin un salon qui prend soin de mes cils naturels tout en les sublimant ! Je ne mets plus de mascara et je gagne un temps fou le matin. Merci pour cette transformation !",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1761414500568-1348275e08a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHBvcnRyYWl0JTIwZWxlZ2FudCUyMHNvcGhpc3RpY2F0ZWR8ZW58MXx8fHwxNzcwOTMxNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Amira K.",
    role: "Pose Y Brésilienne & entretien",
    text: "Le meilleur salon d'Aix-en-Provence, sans hésitation. Des produits de qualité, une hygiène irréprochable et surtout un résultat qui dure. Je ne changerai pour rien au monde !",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1770130173979-79e2e375893d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwd29tYW4lMjBwb3J0cmFpdCUyMGJlYXV0aWZ1bCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MDkzMTYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function TestimonialsSection() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = (count: number) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section
      id="avis"
      className="py-16 sm:py-20 lg:py-32 bg-[#000000] relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#D4AF37]/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#C9A96E]/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span
            className="font-['Poppins'] text-[#C9A96E] tracking-[0.2em] uppercase mb-4 block"
            style={{ fontSize: "0.813rem", fontWeight: 500 }}
          >
            Témoignages
          </span>
          <h2
            className="font-['Playfair_Display'] text-white mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 600,
            }}
          >
            Ce que disent nos{" "}
            <span className="text-[#D4AF37]">clientes</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4AF37] fill-[#D4AF37]"
                />
              ))}
            </div>
            <span
              className="font-['Poppins'] text-white/60"
              style={{ fontSize: "0.875rem", fontWeight: 400 }}
            >
              4.9/5 sur Google &mdash; 380+ avis
            </span>
          </div>
        </motion.div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {getVisibleTestimonials(3).map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${currentIndex}-lg`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4" />
              <p
                className="font-['Poppins'] text-white/80 mb-6"
                style={{
                  fontSize: "0.938rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span
                    className="font-['Poppins'] text-white block truncate"
                    style={{ fontSize: "0.875rem", fontWeight: 500 }}
                  >
                    {testimonial.name}
                  </span>
                  <span
                    className="font-['Poppins'] text-white/40 block truncate"
                    style={{ fontSize: "0.75rem", fontWeight: 400 }}
                  >
                    {testimonial.role}
                  </span>
                </div>
                <div className="ml-auto flex -space-x-0.5 flex-shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2 cards */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 mb-8">
          {getVisibleTestimonials(2).map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${currentIndex}-md`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-2xl p-6 sm:p-8 relative"
            >
              <Quote className="w-7 h-7 text-[#D4AF37]/30 mb-3" />
              <p
                className="font-['Poppins'] text-white/80 mb-5"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span
                    className="font-['Poppins'] text-white block truncate"
                    style={{ fontSize: "0.875rem", fontWeight: 500 }}
                  >
                    {testimonial.name}
                  </span>
                  <span
                    className="font-['Poppins'] text-white/40 block truncate"
                    style={{ fontSize: "0.75rem", fontWeight: 400 }}
                  >
                    {testimonial.role}
                  </span>
                </div>
                <div className="ml-auto flex -space-x-0.5 flex-shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-2xl p-6"
          >
            <Quote className="w-7 h-7 text-[#D4AF37]/30 mb-3" />
            <p
              className="font-['Poppins'] text-white/80 mb-5"
              style={{
                fontSize: "0.875rem",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 flex-shrink-0">
                <ImageWithFallback
                  src={testimonials[currentIndex].photo}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className="font-['Poppins'] text-white block"
                  style={{ fontSize: "0.875rem", fontWeight: 500 }}
                >
                  {testimonials[currentIndex].name}
                </span>
                <span
                  className="font-['Poppins'] text-white/40 block"
                  style={{ fontSize: "0.75rem", fontWeight: 400 }}
                >
                  {testimonials[currentIndex].role}
                </span>
              </div>
              <div className="flex -space-x-0.5 flex-shrink-0">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all bg-transparent cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                  i === currentIndex
                    ? "w-6 sm:w-8 bg-[#D4AF37]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all bg-transparent cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
