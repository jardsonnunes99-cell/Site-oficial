import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    text: "Consegui completar minha coleção rapidamente. Material incrível, super organizado e em alta qualidade!",
    name: "Carlos S.",
    role: "Colecionador",
    stars: 5,
  },
  {
    text: "Material muito organizado. Cada figurinha no lugar certo, com qualidade de impressão excelente. Recomendo demais!",
    name: "Ana P.",
    role: "Mãe de colecionador",
    stars: 5,
  },
  {
    text: "Valeu cada centavo. Economizei muito comparado com comprar pacotes nas bancas. Download foi instantâneo!",
    name: "Rafael M.",
    role: "Colecionador",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-px bg-gradient-to-r from-transparent via-[rgba(212,165,23,0.3)] to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">
            ⭐ DEPOIMENTOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
            O que nossos clientes{" "}
            <span className="text-gradient-gold">dizem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="testimonial-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#D4A517] fill-[#D4A517]"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A651] to-[#007A3D] flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
