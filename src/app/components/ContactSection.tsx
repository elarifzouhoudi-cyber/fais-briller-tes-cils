import { useInView } from "./hooks/useInView";
import { MapPin, Phone, Clock, Camera } from "lucide-react";

const infos = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Nimes, 30000 Gard",
    href: "https://maps.google.com/?q=Nimes+30000",
    color: "#D4AF37",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+33 6 16 74 50 74",
    href: "tel:+33616745074",
    color: "#C9A96E",
  },
  {
    icon: Camera,
    label: "Instagram",
    value: "@fais_briller_tescils",
    href: "https://www.instagram.com/fais_briller_tescils?igsh=MXJlN2F1aDA4czlyOQ==",
    color: "#D4AF37",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Sam : 9h-19h",
    href: undefined,
    color: "#C9A96E",
  },
];

export function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-24 bg-white" ref={ref as React.Ref<HTMLElement>}>
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
            Nous Trouver
          </span>
          <h2
            className="text-black mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            }}
          >
            Contactez-Nous
          </h2>
          <p className="text-gray-500" style={{ fontWeight: 300 }}>
            Reponse garantie sous 2h. Reservez directement par telephone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div
            className={`space-y-4 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {infos.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#F8F6F0] border border-gray-100 hover:border-[#D4AF37]/30 transition-all"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5" style={{ fontWeight: 500 }}>
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-black text-sm hover:text-[#D4AF37] transition-colors"
                      style={{ fontWeight: 500 }}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-black text-sm" style={{ fontWeight: 500 }}>
                      {info.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://www.instagram.com/fais_briller_tescils?igsh=MXJlN2F1aDA4czlyOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A96E]/10 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#D4AF37] flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-black text-sm font-semibold">Suivez-nous sur Instagram</div>
                <div className="text-gray-500 text-xs" style={{ fontWeight: 300 }}>
                  Nos dernieres realisations en photo
                </div>
              </div>
            </a>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px] border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46109.50064099937!2d4.3396!3d43.8367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b42a45d1b2b2f7%3A0x400d92fcbea7c70!2sN%C3%AEmes!5e0!3m2!1sfr!2sfr!4v1699000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Nimes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
