import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useInView } from "./hooks/useInView";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["245 Rue de Lagremeuse", "13290 Aix-en-Provence"],
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["06 16 74 50 74"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@faisbrillertescils.com"],
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven : 9h - 19h", "Sam : 9h - 17h", "Dim : Fermé"],
  },
];

export function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-[#FFFFFF]" ref={ref}>
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
            Nous Trouver
          </span>
          <h2
            className="font-['Playfair_Display'] text-[#000000] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            Venez nous{" "}
            <span className="text-[#D4AF37]">rendre visite</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#F8F6F0] rounded-2xl p-6 border border-[#D4AF37]/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h4 className="font-['Poppins'] text-[#000000] mb-2" style={{ fontSize: "0.938rem", fontWeight: 600 }}>
                      {info.title}
                    </h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="font-['Poppins'] text-[#666666]" style={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.6 }}>
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="font-['Poppins'] text-[#666666]" style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                Suivez-nous :
              </span>
              <a
                href="https://www.instagram.com/fais_briller_tescils?igsh=MXJlN2F1aDA4czlyOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F8F6F0] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#000000] text-[#D4AF37] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F8F6F0] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#000000] text-[#D4AF37] transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden h-[300px] sm:h-[400px] lg:h-full min-h-[300px] border border-[#D4AF37]/10 shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.5!2d5.4474!3d43.5298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMxJzQ3LjMiTiA1wrAyNic1MC42IkU!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr&q=245+Rue+de+Lagremeuse,+13290+Aix-en-Provence"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Fais Briller Tes Cils - 245 Rue de Lagremeuse, 13290 Aix-en-Provence"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
