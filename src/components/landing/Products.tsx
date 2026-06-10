import { motion } from "framer-motion";
import { BookOpen, Rocket, Crown } from "lucide-react";

export const Products = () => {
  return (
    <section className="py-24 px-4 bg-[#050505] relative" id="produtos">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Acesso Exclusivo</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Sua Jornada de Evolução
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* EBOOK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-premium flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-white/70" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ebook</h3>
              <p className="text-xl font-medium text-gold mb-4">"5 Receitas Lucrativas"</p>
              <p className="text-muted-foreground mb-4">
                Receitas simples e lucrativas para começar vendas rapidamente. O primeiro passo para sair do zero.
              </p>
              <ul className="text-foreground/90 mb-8 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span> +1 Estratégia de Venda Bônus
                </li>
              </ul>
            </div>
            <div>
              <p className="text-3xl font-bold mb-6">R$ 29<span className="text-lg text-muted-foreground">,90</span></p>
              <button className="w-full btn-outline">
                COMPRAR AGORA
              </button>
            </div>
          </motion.div>

          {/* MENTORIA (HIGHLIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-premium border-gold-glow flex flex-col justify-between p-8 rounded-2xl relative transform md:-translate-y-4 shadow-gold z-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-background px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-gold-sm text-center whitespace-nowrap">
              Acesso Completo
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6 border border-gold/30">
                <Crown className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mentoria</h3>
              <p className="text-xl font-medium text-gold mb-4">"1% Diferenciado"</p>
              
              <ul className="text-foreground/90 mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span> 10 receitas lucrativas exclusivas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span> 5 estratégias de vendas bônus
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span> 1 planilha financeira bônus
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span> Acompanhamento direto comigo
                </li>
              </ul>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-8">
                <p className="text-xs text-red-400 font-bold uppercase tracking-wider mb-1">⚠️ Aviso Importante</p>
                <p className="text-sm text-white/80">
                  Existem <strong>sérios riscos</strong> de você fazer mais de 1 salário mínimo por mês aplicando este método.
                </p>
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold mb-6 text-gradient-gold">R$ 997<span className="text-xl text-gold/70">,00</span></p>
              <button className="w-full btn-gold py-4 text-lg">
                ENTRAR NA MENTORIA
              </button>
            </div>
          </motion.div>

          {/* TRAINING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-premium flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white/70" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Treinamento</h3>
              <p className="text-xl font-medium text-gold mb-4">"6 Estratégias de Venda"</p>
              <p className="text-muted-foreground mb-4">
                Estratégias reais para aumentar conversão e vender mais nas ruas. Técnicas validadas em campo.
              </p>
              <ul className="text-foreground/90 mb-8 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span> +5 Receitas Lucrativas Bônus
                </li>
              </ul>
            </div>
            <div>
              <p className="text-3xl font-bold mb-6">R$ 197<span className="text-lg text-muted-foreground">,00</span></p>
              <button className="w-full btn-outline">
                ACESSAR TREINAMENTO
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
