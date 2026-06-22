import { motion } from "framer-motion";
import { Check, ArrowRight, Gift, TrendingUp, Users } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const perks = [
  "Compra direta com preço exclusivo de revendedor",
  "Margem real e lucrativa em cada produto vendido",
  "Suporte completo e treinamento comercial incluído",
  "Possibilidade de renda recorrente e escalável",
  "Material de apoio para suas vendas",
  "Atendimento preferencial e prioritário",
];

const highlights = [
  { icon: Gift, label: "Produtos Exclusivos" },
  { icon: TrendingUp, label: "Margem Lucrativa" },
  { icon: Users, label: "Suporte Dedicado" },
];

export function Reseller() {
  return (
    <section id="revenda" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/5 blur-[200px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl"
      >
        {/* Card */}
        <div className="glass-premium rounded-3xl p-8 sm:p-14 shadow-gold border-gold overflow-hidden">
          {/* Top accent line */}
          <div className="neon-line-gold mb-10" />

          {/* Tag */}
          <div className="flex justify-center mb-6">
            <p className="section-tag">
              <span className="w-4 h-px bg-primary inline-block" />
              Programa Diferenciado de Revenda
              <span className="w-4 h-px bg-primary inline-block" />
            </p>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-4">
            Torne-se um <span className="text-gradient-gold">Parceiro Diferenciado</span>.
          </h2>

          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10 leading-relaxed">
            Tenha acesso aos nossos produtos com preço exclusivo de revenda, suporte direto e a
            estrutura completa para construir sua própria renda em toda a Paraíba e Pernambuco.
          </p>

          {/* Highlights row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 glass rounded-full px-5 py-2.5 border-gold"
              >
                <div className="w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground/80">{label}</span>
              </div>
            ))}
          </div>

          {/* Perks grid */}
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-12">
            {perks.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-start gap-3 text-sm"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                </span>
                <span className="text-foreground/80">{p}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href={waLink(
                "Olá! Quero aprender a vender os produtos Diferenciado como revendedor. Pode me passar mais informações?",
              )}
              target="_blank"
              rel="noreferrer"
              id="btn-aprender-vender"
              className="btn-gold group"
            >
              Quero Aprender a Vender
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Bottom accent line */}
          <div className="neon-line-gold mt-10" />
        </div>
      </motion.div>
    </section>
  );
}
