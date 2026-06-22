import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck } from "lucide-react";
import imgFilosofia from "@/assets/filosofia.jpg";

export const About = () => {
  return (
    <section className="py-24 px-4 bg-[#0A0A0A] relative" id="sobre">
      <div className="absolute inset-0 bg-gold-gradient-subtle opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag mb-4">A Filosofia</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              O Que Significa Ser <br />
              <span className="text-gradient-gold">1% Diferenciado</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-light">
              "1% Diferenciado" representa pessoas que decidiram evoluir enquanto a maioria
              permanece parada. É sobre desenvolver comunicação, aumentar vendas, empreender e
              construir uma mentalidade forte para crescer financeiramente.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Evolução Constante</h4>
                  <p className="text-foreground/70">
                    A mediocridade é o padrão. Nós escolhemos o progresso e o crescimento
                    financeiro.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Disciplina Implacável</h4>
                  <p className="text-foreground/70">
                    Onde a maioria para por falta de motivação, o 1% continua pela disciplina.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-premium border-gold relative z-10">
              <img
                src={imgFilosofia}
                alt="Roliude Nordestina"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/20 blur-[60px] rounded-full z-0"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/10 blur-[60px] rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
