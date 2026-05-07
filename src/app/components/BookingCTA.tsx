import { useInView } from "./hooks/useInView";
import { Phone, Tag } from "lucide-react";

export function BookingCTA() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="relative py-28 overflow-hidden"
      ref={ref as React.Ref<HTMLElement>}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div
        className={`relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center transition-all duration-800 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-sm mb-8">
          <Tag className="w-4 h-4" />
          <span style={{ fontWeight: 600 }}>OFFRE DECOUVERTE — -10% sur votre premiere pose</span>
        </div>

        <h2
          className="text-white mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.2,
          }}
        >
          Prête a Sublimer<br />
          <em>Votre Regard ?</em>
        </h2>

        <p className="text-white/70 mb-10" style={{ fontWeight: 300, fontSize: "1.05rem" }}>
          Appelez directement pour reserver votre créneau. Reponse rapide garantie.
        </p>

        <a
          href="tel:+33616745074"
          className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4AF37] text-black rounded-full hover:bg-[#C9A96E] transition-all hover:scale-105"
          style={{ fontWeight: 700, fontSize: "1.1rem" }}
        >
          <Phone className="w-5 h-5" />
          +33 6 16 74 50 74
        </a>

        <p className="text-white/40 text-sm mt-4" style={{ fontWeight: 300 }}>
          Lun-Sam · 9h-19h · Reponse sous 2h
        </p>
      </div>
    </section>
  );
}
