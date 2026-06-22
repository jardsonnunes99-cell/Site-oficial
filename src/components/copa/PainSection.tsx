import { motion } from "framer-motion";
import { DollarSign, Clock, SearchX } from "lucide-react";

const pains = [
  {
    icon: DollarSign,
    text: "Gasta dinheiro comprando pacotes repetidos.",
    color: "#D4A517",
  },
  {
    icon: Clock,
    text: "Perde tempo procurando trocas.",
    color: "#D4A517",
  },
  {
    icon: SearchX,
    text: "Não encontra as figurinhas que faltam.",
    color: "#D4A517",
  },
];

export function PainSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-px bg-gradient-to-r from-transparent via-[rgba(212,165,23,0.3)] to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">⚠️ ATENÇÃO</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
            Cansado de procurar <span className="text-gradient-gold">figurinhas difíceis?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-dark group text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${pain.color}20 0%, ${pain.color}08 100%)`,
                  border: `1px solid ${pain.color}30`,
                }}
              >
                <pain.icon className="w-7 h-7" style={{ color: pain.color }} />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">{pain.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
