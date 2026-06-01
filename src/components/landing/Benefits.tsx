import { motion } from "framer-motion";
import {
  Package,
  Trophy,
  Factory,
  RefreshCw,
  Truck,
  BookOpen,
  TrendingUp,
  Brain,
  Mic,
  DollarSign,
} from "lucide-react";

const differentials = [
  {
    icon: Package,
    title: "Produtos Artesanais Exclusivos",
    desc: "Receitas únicas, desenvolvidas com ingredientes selecionados para uma experiência inigualável.",
    color: "from-amber-500/20 to-yellow-600/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Trophy,
    title: "Qualidade Superior",
    desc: "Padrão premium em cada detalhe — da produção à entrega, excelência é inegociável.",
    color: "from-yellow-400/20 to-amber-500/10",
    iconColor: "text-yellow-300",
  },
  {
    icon: Factory,
    title: "Produção Profissional",
    desc: "Processo artesanal com controle de qualidade rigoroso e higiene total.",
    color: "from-orange-400/15 to-amber-400/10",
    iconColor: "text-orange-300",
  },
  {
    icon: RefreshCw,
    title: "Oportunidade de Revenda",
    desc: "Torne-se um parceiro e lucre com produtos que se vendem pelos seus diferenciais.",
    color: "from-amber-600/20 to-yellow-500/10",
    iconColor: "text-amber-300",
  },
  {
    icon: Truck,
    title: "Entrega para Eventos",
    desc: "Atendemos toda a Paraíba e Pernambuco com pontualidade e cuidado na entrega.",
    color: "from-yellow-500/20 to-amber-300/10",
    iconColor: "text-yellow-400",
  },
  {
    icon: BookOpen,
    title: "Treinamento Comercial",
    desc: "Aprenda as técnicas que transformam conversas em vendas reais e consistentes.",
    color: "from-amber-400/20 to-yellow-400/10",
    iconColor: "text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Estratégias de Vendas",
    desc: "Gatilhos mentais, abordagem e fechamento que realmente convertem e geram receita.",
    color: "from-yellow-600/20 to-amber-500/10",
    iconColor: "text-yellow-300",
  },
  {
    icon: Brain,
    title: "Desenvolvimento Pessoal",
    desc: "Mentalidade vencedora, disciplina e consistência para alcançar seus objetivos.",
    color: "from-amber-300/20 to-yellow-600/10",
    iconColor: "text-amber-200",
  },
  {
    icon: Mic,
    title: "Superação da Timidez",
    desc: "Domine sua voz, postura e presença para vender com naturalidade e confiança.",
    color: "from-yellow-400/20 to-amber-600/10",
    iconColor: "text-yellow-400",
  },
  {
    icon: DollarSign,
    title: "Aumento de Faturamento",
    desc: "Do zero à renda consistente: construa um negócio lucrativo e escalável.",
    color: "from-amber-500/20 to-yellow-400/10",
    iconColor: "text-amber-400",
  },
];

export function Benefits() {
  return (
    <section id="diferenciais" className="relative py-32 px-6 section-divider overflow-hidden">
      {/* Background orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/4 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-tag justify-center">
            <span className="w-4 h-px bg-primary inline-block" />
            Nossos Diferenciais
            <span className="w-4 h-px bg-primary inline-block" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">
            O que torna o{" "}
            <span className="text-gradient-gold">Diferenciado</span> único.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada detalhe foi pensado para oferecer uma experiência completa — do produto ao negócio.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group card-premium cursor-default"
            >
              {/* Icon container */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-400`}
              >
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              <h3 className="font-display text-base font-semibold mb-2 leading-snug text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500 rounded-b-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}