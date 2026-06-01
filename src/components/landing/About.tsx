import { motion } from "framer-motion";
import { Award, TrendingUp, Heart } from "lucide-react";
import sobrePortrait from "@/assets/sobre-portrait.jpg";

const pillars = [
  { icon: Award, label: "Técnica", desc: "Método testado e validado no mercado" },
  { icon: TrendingUp, label: "Estratégia", desc: "Vendas com consistência e propósito" },
  { icon: Heart, label: "Propósito", desc: "Missão de transformar vidas pelas vendas" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-32 px-6 section-divider overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Imagem ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Frame dourado */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-sm" />
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-gold">
                <img
                  src={sobrePortrait}
                  alt="Diferenciado — Fundador apresentando produtos"
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "600px", objectPosition: "center top" }}
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Badge flutuante */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass-premium rounded-2xl px-5 py-4 shadow-gold border-gold"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-primary uppercase tracking-wider font-semibold">Mais de</div>
                    <div className="font-display text-lg font-bold text-foreground">1 Ano</div>
                    <div className="text-xs text-muted-foreground">de mercado</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Texto ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="section-tag mb-5">
              <span className="w-4 h-px bg-primary inline-block" />
              Quem Sou
              <span className="w-4 h-px bg-primary inline-block" />
            </p>

            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              Uma história construída{" "}
              <span className="text-gradient-gold">nas ruas</span>.
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                Comecei vendendo nas ruas com a coragem de quem não tinha nada a perder —
                e tudo a conquistar. Aprendi na prática que vender é, antes de tudo,{" "}
                <span className="text-foreground font-medium">comunicação, postura e estratégia</span>.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Hoje, depois de mais de 1 ano produzindo e comercializando produtos para festas,
                aniversários e eventos, transformei minha jornada em método. Um caminho claro para
                quem quer perder o medo de vender, criar produtos lucrativos e construir uma{" "}
                <span className="text-foreground font-medium">renda real, consistente e escalável</span>.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Minha missão é simples:{" "}
                <span className="text-primary font-semibold">
                  mostrar que qualquer pessoa pode viver bem das vendas — com técnica, autoridade e propósito.
                </span>
              </p>
            </div>

            {/* Pilares */}
            <div className="grid grid-cols-3 gap-4">
              {pillars.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="card-premium text-center p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="font-semibold text-sm text-foreground mb-1">{label}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}