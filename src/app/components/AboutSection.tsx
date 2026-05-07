import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Heart, Sparkles, Shield } from "lucide-react";

const features = [
  { icon: Award, title: "Certifiee Lash Artist", desc: "Formee aux meilleures techniques internationales" },
  { icon: Heart, title: "Produits Premium", desc: "Colles hypoallergeniques, extensions en fibre de soie" },
  { icon: Sparkles, title: "Technique Exclusive", desc: "Chaque pose adaptee a votre morphologie" },
  { icon: Shield, title: "Hygiene Irreprochable", desc: "Materiel sterile, cabine privative et sanitisee" },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="a-propos" className="py-24 bg-white" ref={ref as React.Ref<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative transition-all duration-800 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80"
                  alt="Salon Fais Briller Tes Cils"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583001809873-9c70d284d234?w=400&q=80"
                  alt="Extension cils"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 -left-4 bg-black text-white rounded-2xl px-4 py-3 shadow-xl">
                <div
                  className="text-[#D4AF37] text-2xl"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                >
                  8+
                </div>
                <div className="text-white/70 text-xs" style={{ fontWeight: 300 }}>ans d'exp.</div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-800 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span
              className="text-[#D4AF37] text-[0.8rem] tracking-[0.2em] uppercase mb-3 block"
              style={{ fontWeight: 600 }}
            >
              A Propos
            </span>
            <h2
              className="text-black mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              L'art des Extensions,<br />
              <em>Elevee au rang de Passion</em>
            </h2>
            <p className="text-gray-500 mb-4 leading-relaxed" style={{ fontWeight: 300 }}>
              Depuis plus de 8 ans, je mets mon expertise au service de votre beaute. Chaque pose
              est une oeuvre unique, pensee pour sublimer votre regard tout en preservant la sante
              de vos cils naturels.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed" style={{ fontWeight: 300 }}>
              Basee a Nimes, ma salle privative vous offre un espace de detente ou chaque detail
              compte — de la selection des extensions jusqu'a la pose finale.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <feat.icon className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-black text-sm font-semibold">{feat.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5" style={{ fontWeight: 300 }}>
                      {feat.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
