import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1617397303021-f68bae9f29d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJlYXV0aWZ1bCUyMGZhY2UlMjBwb3J0cmFpdCUyMHNvZnQlMjBsaWdodHxlbnwxfHx8fDE3NzA4ODY0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Résultat pose classique",
    category: "Classique",
  },
  {
    src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0cmVhdG1lbnQlMjBzcGElMjByZWxheGF0aW9uJTIwd29tYW58ZW58MXx8fHwxNzcwODg2NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Soin et relaxation",
    category: "Volume",
  },
  {
    src: "https://images.unsplash.com/photo-1760081444247-4789ca784eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdsYW1vdXIlMjBwb3J0cmFpdCUyMGVsZWdhbnQlMjBtYWtldXB8ZW58MXx8fHwxNzcwODg2NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Regard glamour",
    category: "Mega Volume",
  },
  {
    src: "https://images.unsplash.com/photo-1613627121937-076300643db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMGNsb3NlZCUyMGV5ZXMlMjBleWVsYXNoZXMlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDg4NjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Extensions naturelles",
    category: "Classique",
  },
  {
    src: "https://images.unsplash.com/photo-1586359526010-3b87482012ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHRvb2xzJTIwY29zbWV0aWNzJTIwZmxhdGxheXxlbnwxfHx8fDE3NzA4ODY0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Nos outils professionnels",
    category: "Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1769697264314-28f093151bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWF1dHklMjBzYWxvbiUyMHdvcmtzcGFjZSUyMGNsZWFufGVufDF8fHx8MTc3MDg4NjQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Espace de travail moderne",
    category: "Salon",
  },
];

const categories = ["Tous", "Classique", "Volume", "Mega Volume", "Salon"];

export function GallerySection() {
  const { ref, isInView } = useInView();
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "Tous"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="galerie" className="py-16 sm:py-20 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span
            className="font-['Poppins'] text-[#D4AF37] tracking-[0.2em] uppercase mb-4 block"
            style={{ fontSize: "0.813rem", fontWeight: 500 }}
          >
            Notre Portfolio
          </span>
          <h2
            className="font-['Playfair_Display'] text-[#000000] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            Galerie de{" "}
            <span className="text-[#D4AF37]">réalisations</span>
          </h2>
          <p
            className="font-['Poppins'] text-[#666666] max-w-xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Découvrez nos plus belles réalisations et laissez-vous inspirer.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-['Poppins'] transition-all duration-300 border-none cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#D4AF37] text-[#000000] shadow-lg shadow-[#D4AF37]/20"
                  : "bg-[#F8F6F0] text-[#666666] hover:bg-[#D4AF37]/10"
              }`}
              style={{ fontSize: "0.813rem", fontWeight: 500 }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5]"
                onClick={() => setSelectedImage(image.src)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span
                    className="font-['Poppins'] text-[#D4AF37] block mb-1"
                    style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em" }}
                  >
                    {image.category.toUpperCase()}
                  </span>
                  <span className="font-['Playfair_Display'] text-white" style={{ fontSize: "1.125rem", fontWeight: 500 }}>
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white bg-transparent border-none cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Galerie"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
