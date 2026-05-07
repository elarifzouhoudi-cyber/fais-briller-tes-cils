import { useInView } from "./hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "On discute ensemble de vos attentes, de votre morphologie et de vos cils naturels pour definir la technique la plus adaptee.",
  },
  {
    number: "02",
    title: "Diagnostic",
    desc: "Bilan de sante de vos cils naturels. Choix de la longueur, courbure et epaisseur des extensions selon votre profil.",
  },
  {
    number: "03",
    title: "La Pose",
    desc: "En position allongee, dans un espace calme et confortable. Chaque extension posee avec precision et soin.",
  },
  {
    number: "04",
    title: "Le Resultat",
    desc: "Un regard transforme, naturel et durable. Conseils d'entretien personnalises pour maximiser la longevite.",
  },
];

export function ProcessSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#F8F6F0]" ref={ref as React.Ref<HTMLElement>}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-[#D4AF37] text-[0.8rem] tracking-[0.2em] uppercase mb-3 block"
            style={{ fontWeight: 600 }}
          >
            Notre Methode
          </span>
          <h2
            className="text-black"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            }}
          >
            Le Deroulement de Votre Pose
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-[#D4AF37]/20" style={{ top: "2rem" }} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative text-center transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-[#D4AF37] mb-5 mx-auto">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="text-black mb-3 text-lg"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
