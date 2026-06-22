import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  TrendingUp,
  Brain,
  DollarSign,
  Target,
  Award,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  { icon: MessageSquare, title: "Comunicação Persuasiva", delay: 0.1 },
  { icon: Users, title: "Como Perder a Timidez", delay: 0.2 },
  { icon: Target, title: "Estratégias de Vendas", delay: 0.3 },
  { icon: Brain, title: "Mentalidade Empreendedora", delay: 0.4 },
  { icon: DollarSign, title: "Como Lucrar Mais", delay: 0.5 },
  { icon: TrendingUp, title: "Técnicas de Abordagem", delay: 0.6 },
  { icon: Award, title: "Posicionamento Pessoal", delay: 0.7 },
  { icon: ShieldCheck, title: "Disciplina Comercial", delay: 0.8 },
];

export const Learn = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden" id="aprender">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-tag">O Método</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            O Que Você Vai Aprender
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="glass-premium p-8 rounded-2xl hover-lift border border-white/5 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center mb-6 border border-gold/20 group-hover:border-gold/60 transition-colors shadow-gold-sm">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
