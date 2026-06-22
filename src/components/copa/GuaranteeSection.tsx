import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-px bg-gradient-to-r from-transparent via-[rgba(212,165,23,0.3)] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#131313] border border-[rgba(212,165,23,0.15)]"
        >
          {/* Badge */}
          <div className="flex-shrink-0">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="guarantee-badge"
            >
              <div className="text-center">
                <ShieldCheck className="w-10 h-10 text-[#111111] mx-auto mb-1" />
                <span className="text-[#111111] text-xs font-black block leading-tight">
                  7 DIAS
                </span>
              </div>
            </motion.div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              <span className="text-gradient-gold">7 dias</span> de garantia incondicional
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-2">
              Se por qualquer motivo você não gostar do material,{" "}
              <strong className="text-white">devolvemos 100% do seu dinheiro</strong>. Sem
              perguntas, sem burocracia.
            </p>
            <p className="text-gray-500 text-sm">
              Risco zero para você. Toda a confiança do nosso lado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
