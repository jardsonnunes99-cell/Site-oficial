import { motion } from "framer-motion";
import { ClipboardList, Table2, RefreshCw } from "lucide-react";

const bonuses = [
  {
    icon: ClipboardList,
    title: "Bônus 1",
    subtitle: "Checklist da coleção",
    description: "Acompanhe exatamente quais figurinhas você já tem e quais faltam.",
    color: "#D4A517",
  },
  {
    icon: Table2,
    title: "Bônus 2",
    subtitle: "Tabela de controle",
    description: "Planilha organizacional para gerenciar sua coleção de forma prática.",
    color: "#00A651",
  },
  {
    icon: RefreshCw,
    title: "Bônus 3",
    subtitle: "Atualizações futuras",
    description: "Receba novas figurinhas e melhorias gratuitamente por tempo indeterminado.",
    color: "#D4A517",
  },
];

export function BonusSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-px bg-gradient-to-r from-transparent via-[rgba(0,166,81,0.3)] to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,166,81,0.06)_0%,transparent_50%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag-green mb-6 inline-flex">
            🎁 BÔNUS EXCLUSIVOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
            E tem <span className="text-gradient-green">mais!</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Além do pack completo, você recebe bônus especiais para completar sua experiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl p-8 bg-gradient-to-b from-[#1a1a1a] to-[#131313] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(212,165,23,0.25)] transition-all duration-400 text-center overflow-hidden"
            >
              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${bonus.color}60, transparent)`,
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${bonus.color}08 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${bonus.color}18 0%, ${bonus.color}08 100%)`,
                    border: `1px solid ${bonus.color}30`,
                  }}
                >
                  <bonus.icon className="w-7 h-7" style={{ color: bonus.color }} />
                </div>

                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{ color: bonus.color }}
                >
                  {bonus.title}
                </span>

                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {bonus.subtitle}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
