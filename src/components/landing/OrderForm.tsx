import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function OrderForm() {
  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden">
      {/* Background with premium gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.05_0_0),oklch(0.15_0_0))] z-0" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[400px] bg-gold/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-premium border-gold-glow rounded-[2.5rem] p-12 sm:p-20 shadow-gold"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            A decisão de evoluir <br/>
            <span className="text-gradient-gold">começa agora.</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-12 font-light">
            Entre para o 1% Diferenciado.
          </p>

          <a
            href="#produtos"
            className="btn-gold group text-xl py-6 px-12 w-full sm:w-auto inline-flex items-center justify-center gap-3 shadow-gold"
          >
            COMEÇAR AGORA
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}