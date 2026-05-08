import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useState, useEffect } from "react";

const stats = [
  { number: 5000, suffix: "+", label: "Poses réalisées" },
  { number: 380, suffix: "+", label: "Avis 5 étoiles" },
  { number: 8, suffix: " ans", label: "D'expérience" },
  { number: 98, suffix: "%", label: "Clientes satisfaites" },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#000000] relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-[#C9A96E] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <span
                className="font-['Playfair_Display'] text-[#D4AF37] block mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1 }}
              >
                <AnimatedCounter target={stat.number} suffix={stat.suffix} isInView={isInView} />
              </span>
              <span
                className="font-['Poppins'] text-white/60"
                style={{ fontSize: "0.875rem", fontWeight: 400 }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
