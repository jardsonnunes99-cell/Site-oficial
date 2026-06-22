import { motion } from "framer-motion";

export function DemoSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-px bg-gradient-to-r from-transparent via-[rgba(212,165,23,0.3)] to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,165,23,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">👁️ DEMONSTRAÇÃO</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
            Veja o que <span className="text-gradient-gold">está dentro</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Material completo, organizado e pronto para usar. Confira algumas páginas do pack:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-6 bg-[radial-gradient(circle,rgba(212,165,23,0.1)_0%,transparent_60%)] blur-xl" />

          <div className="relative rounded-2xl overflow-hidden border border-[rgba(212,165,23,0.15)] shadow-gold">
            <img
              src="/images/preview-image.jpg"
              alt="Preview das páginas do Pack de Figurinhas"
              className="w-full h-auto"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-40" />
          </div>

          {/* Page labels */}
          <div className="flex justify-center gap-4 sm:gap-8 mt-8 flex-wrap">
            {["Página 1", "Página 2", "Página 3", "Página 4"].map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(212,165,23,0.08)] border border-[rgba(212,165,23,0.2)] text-sm font-semibold text-[#D4A517]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4A517]" />
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
