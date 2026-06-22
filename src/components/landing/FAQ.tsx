import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o treinamento de vendas?",
    a: "É um acompanhamento prático e direto. Você recebe método, técnicas de comunicação e vendas, suporte e acompanhamento personalizado para aplicar no seu negócio desde a primeira semana. Sem teoria desnecessária — apenas o que realmente funciona.",
  },
  {
    q: "Como funciona o programa de revenda?",
    a: "Você adquire nossos produtos com preço exclusivo de revendedor e os comercializa com margem real. Damos suporte completo, treinamento e materiais para você vender mais rápido. Atendemos toda a Paraíba e Pernambuco.",
  },
  {
    q: "Como faço uma encomenda?",
    a: "Basta preencher o formulário de encomendas com os detalhes do seu evento. Após enviar, você será direcionado ao WhatsApp com todas as informações preenchidas automaticamente. Retornamos com a proposta personalizada em minutos.",
  },
  {
    q: "Vocês entregam em outras cidades?",
    a: "Sim! Atendemos toda a Paraíba e Pernambuco. Após o contato, alinhamos logística, prazo e frete de acordo com a localização do seu evento.",
  },
  {
    q: "Qual o prazo de produção?",
    a: "O prazo varia conforme a quantidade e o tipo de produto. Em geral trabalhamos com 7 a 15 dias de antecedência para garantir qualidade premium. Para grandes eventos, recomendamos reservar com mais antecedência.",
  },
  {
    q: "Os produtos são artesanais?",
    a: "Sim, 100% artesanais! Cada produto é feito com ingredientes selecionados, receitas exclusivas e o cuidado de quem coloca amor em cada detalhe. Isso é o que torna a experiência verdadeiramente diferenciada.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 px-6 section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="section-tag justify-center">
            <span className="w-4 h-px bg-primary inline-block" />
            Perguntas Frequentes
            <span className="w-4 h-px bg-primary inline-block" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Suas dúvidas, <span className="text-gradient-gold">respondidas</span>.
          </h2>
        </motion.div>

        {/* Items */}
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-gold shadow-gold-sm" : "border-transparent"
                }`}
                style={{ border: "1px solid" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
                >
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      isOpen ? "text-gradient-gold" : "text-foreground"
                    }`}
                  >
                    {f.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-gold-gradient shadow-gold-sm" : "glass border-gold"
                    }`}
                  >
                    <Plus
                      className={`w-4 h-4 transition-all duration-400 ${
                        isOpen ? "rotate-45 text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
