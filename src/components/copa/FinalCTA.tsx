import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,166,81,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,165,23,0.06)_0%,transparent_50%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Não perca essa{" "}
            <span className="text-gradient-green">oportunidade!</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Complete sua coleção da Copa do Mundo agora mesmo. Acesso imediato
            após a compra.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Animated arrow */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8 text-[#00A651]" />
          </motion.div>

          <a
            href="#"
            className="btn-cta text-lg sm:text-xl px-12 sm:px-20 py-5 sm:py-6"
          >
            🏆 QUERO BAIXAR AGORA
          </a>

          <p className="text-gray-500 text-sm">
            Por apenas{" "}
            <span className="text-[#00A651] font-bold">R$ 9,90</span>{" "}
            · Acesso vitalício · Garantia de 7 dias
          </p>

          {/* Pulse ring effect around button */}
          <div className="relative -mt-20 pointer-events-none">
            <div className="absolute inset-0 w-80 h-20 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full border border-[rgba(0,166,81,0.2)]"
                animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
