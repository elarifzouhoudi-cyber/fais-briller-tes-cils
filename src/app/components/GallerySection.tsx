import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ZoomIn } from "lucide-react";

const categories = ["Tous", "Cils a Cils", "Y Bresilienne", "Avant/Apres"];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80",
    alt: "Extension cils naturelles",
    category: "Cils a Cils",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Regard Y Bresilienne",
    category: "Y Bresilienne",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Avant apres extensions",
    category: "Avant/Apres",
  },
  {
    src: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80",
    alt: "Pose cils professionnelle",
    category: "Cils a Cils",
  },
  {
    src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80",
    alt: "Cils volume Y",
    category: "Y Bresilienne",
  },
  {
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    alt: "Resultat avant apres",
    category: "Avant/Apres",
  },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { ref, isInView } = useInView();

  const filtered =
    activeCategory === "Tous"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section id="galerie" className="py-24 bg-white" ref={ref as React.Ref<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-[#D4AF37] text-[0.8rem] tracking-[0.2em] uppercase mb-3 block"
            style={{ fontWeight: 600 }}
          >
            Notre Galerie
          </span>
          <h2
            className="text-black mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            }}
          >
            Nos Plus Belles Realisations
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={{ fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative group cursor-pointer rounded-xl overflow-hidden aspect-square transition-all duration-700 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(photo.src)}
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              alt="Photo agrandie"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
