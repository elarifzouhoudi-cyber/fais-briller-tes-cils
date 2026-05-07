import { useState } from "react";
import { useInView } from "./hooks/useInView";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Est-ce que les extensions de cils abiment les cils naturels ?",
    a: "Non, quand la pose est realisee correctement par une professionnelle certifiee. Les extensions sont posees sur les cils matures et n'affectent pas la croissance. Il est important de respecter les conseils d'entretien et les delais de remplissage.",
  },
  {
    q: "Combien de temps dure une pose d'extensions ?",
    a: "La pose cils a cils dure environ 2h30, la Y bresilienne environ 2h. Comptez 1h pour un remplissage. Prevoyez d'arriver sans maquillage sur les yeux.",
  },
  {
    q: "Quelle est la duree de vie des extensions ?",
    a: "En moyenne 3 a 6 semaines selon votre cycle de croissance capillaire. Un remplissage toutes les 2-3 semaines permet de maintenir un resultat optimal.",
  },
  {
    q: "Comment se preparer avant la pose ?",
    a: "Arrivez sans maquillage sur les yeux (mascara, eye-liner, fard a paupieres). Evitez les serums a base d'huile les jours precedents. Ne pas porter de lentilles pendant la pose.",
  },
  {
    q: "Les extensions sont-elles compatibles avec tous les types de cils ?",
    a: "Oui ! Lors de la consultation, j'evalue vos cils naturels pour choisir la technique et les extensions les plus adaptees a votre profil. Meme les cils fins ou clairsemes peuvent etre sublimes.",
  },
  {
    q: "Quels sont les conseils d'entretien post-pose ?",
    a: "Evitez l'eau les 24 premieres heures. Brossez vos cils chaque matin avec une brosse fournie. Evitez les produits gras autour des yeux. Ne tirez jamais sur les extensions.",
  },
  {
    q: "Peut-on mettre du mascara avec des extensions ?",
    a: "Ce n'est pas necessaire et deconseille — c'est justement l'avantage des extensions ! Si vous souhaitez en mettre, utilisez uniquement du mascara specifique extensions, applique uniquement sur les pointes.",
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        isOpen ? "border-[#D4AF37]/30 bg-[#D4AF37]/3" : "border-gray-100 bg-white"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
      >
        <span
          className={`text-sm transition-colors ${isOpen ? "text-black" : "text-gray-800"}`}
          style={{ fontWeight: 500 }}
        >
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#D4AF37]" : "text-gray-400"
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "300px" : "0px" }}
      >
        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#F8F6F0]" ref={ref as React.Ref<HTMLElement>}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-[#D4AF37] text-[0.8rem] tracking-[0.2em] uppercase mb-3 block"
            style={{ fontWeight: 600 }}
          >
            Questions Frequentes
          </span>
          <h2
            className="text-black"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            }}
          >
            Tout ce que vous voulez savoir
          </h2>
        </div>

        <div
          className={`space-y-3 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
