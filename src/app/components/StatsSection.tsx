import { useEffect, useRef, useState } from "react";
import { useInView } from "./hooks/useInView";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView(0.5);
  const started = useRef(false);

  useEffect(() => {
    if (isInView && !started.current) {
      started.current = true;
      const duration = 1800;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }
  }, [isInView, target]);

  return (
    <span ref={ref as React.Ref<HTMLSpanElement>}>
      {count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Poses realisees", sublabel: "depuis l'ouverture" },
  { value: 380, suffix: "+", label: "Avis certifies", sublabel: "note 4.9/5" },
  { value: 8, suffix: " ans", label: "d'experience", sublabel: "en extensions de cils" },
  { value: 98, suffix: "%", label: "Clientes satisfaites", sublabel: "taux de retour" },
];

export function StatsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="stats" className="py-20 bg-black" ref={ref as React.Ref<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="text-[#D4AF37] mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white text-sm font-medium">{stat.label}</div>
              <div className="text-white/40 text-xs mt-1" style={{ fontWeight: 300 }}>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
