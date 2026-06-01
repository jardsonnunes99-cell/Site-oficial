import { motion } from "framer-motion";
import { ArrowRight, Zap, Users, BookOpen, TrendingUp, Shield, Star } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const topics = [
  { icon: Zap, title: "Vender nas ruas", desc: "Técnica, postura e abordagem para vender em qualquer lugar" },
  { icon: Users, title: "Perder a timidez", desc: "Comunicação com confiança e presença que converte" },
  { icon: BookOpen, title: "Criar produtos", desc: "Do zero ao produto lucrativo com identidade única" },
  { icon: TrendingUp, title: "Lucrar de verdade", desc: "Precificação, margem e escala para uma renda real" },
  { icon: Shield, title: "Postura de vendedor", desc: "Construa autoridade e seja lembrado pelos clientes" },
  { icon: Star, title: "Método validado", desc: "Aprenda com quem já fez e continua fazendo todo dia" },
];

export function Mentoria() {
  return (
    <section id="mentoria" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/6 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-tag justify-center mb-5">
            <span className="w-4 h-px bg-primary inline-block" />
            Mentoria Diferenciado
            <span className="w-4 h-px bg-primary inline-block" />
          </p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Aprenda a{" "}
            <span className="text-gradient-gold">lucrar nas ruas</span>{" "}
            do jeito certo.
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Não importa se você nunca vendeu nada. Com o método certo, qualquer pessoa
            consegue perder o medo, criar produtos que vendem e{" "}
            <span className="text-foreground font-medium">construir uma renda real e consistente</span> — mesmo começando do zero.
          </p>
        </motion.div>

        {/* Topics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {topics.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-premium hover-lift group p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="glass-premium rounded-3xl p-8 sm:p-12 border-gold shadow-gold text-center"
        >
          <div className="neon-line-gold mb-8" />

          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 border-gold mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-foreground/80">Vagas Limitadas</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Pronto para transformar sua{" "}
            <span className="text-gradient-gold">vida com as vendas?</span>
          </h3>

          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Entre em contato agora e descubra como a mentoria pode te ajudar a vender com
            confiança, criar produtos que encantam e construir uma renda escalável.
          </p>

          <a
            href={waLink(
              "Olá! Quero saber mais sobre a Mentoria Diferenciado para aprender a vender e lucrar."
            )}
            target="_blank"
            rel="noreferrer"
            id="btn-quero-ser-mentorado"
            className="btn-gold group inline-flex"
          >
            Quero Ser Mentorado
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="neon-line-gold mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
