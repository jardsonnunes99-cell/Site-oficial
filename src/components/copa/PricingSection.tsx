import { motion } from "framer-motion";
import { Check, Zap, Shield, Gift } from "lucide-react";

const included = [
  "Pack completo em PDF (centenas de figurinhas)",
  "Alta qualidade de impressão",
  "Download imediato",
  "Acesso vitalício",
  "Bônus: Checklist da coleção",
  "Bônus: Tabela de controle",
  "Bônus: Atualizações futuras",
];

export function PricingSection() {
  return (
    <section id="oferta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-px bg-gradient-to-r from-transparent via-[rgba(0,166,81,0.3)] to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,166,81,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,165,23,0.06)_0%,transparent_50%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-tag-green mb-6 inline-flex">
            <Zap className="w-3.5 h-3.5" />
            OFERTA ESPECIAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
            Aproveite o <span className="text-gradient-green">melhor preço</span>
          </h2>
        </motion.div>

        {/* Cost Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1a1111] to-[#140b0b] border border-[rgba(255,50,50,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-6xl">💸</span>
            </div>
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Maneira Tradicional
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Comprar 670 figurinhas em pacotinhos (R$ 7,00 cada)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>
                  Gastaria no <strong>mínimo R$ 938,00</strong> (sem tirar repetidas)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>
                  Na prática, com as repetidas, o custo ultrapassa <strong>R$ 3.000,00!</strong>
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0b1a11] to-[#08140b] border border-[rgba(0,166,81,0.3)] relative overflow-hidden shadow-[0_0_30px_rgba(0,166,81,0.1)]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-6xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-[#00A651] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00A651] animate-pulse" />O Jeito
              Inteligente
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00A651] mt-1">✓</span>
                <span>Pack Digital completo e organizado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00A651] mt-1">✓</span>
                <span>Gasto único: Imprima quantas vezes precisar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00A651] mt-1">✓</span>
                <span>Economia de quase R$ 3.000,00 na sua coleção!</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="price-card"
        >
          {/* Popular badge */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00A651] to-[#007A3D] text-white text-xs font-bold tracking-wider uppercase shadow-green">
              🔥 MAIS VENDIDO
            </div>
          </div>

          <div className="relative z-10 text-center pt-4">
            {/* Urgency Alert */}
            <div className="mb-6 inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />O preço vai subir
              para R$ 29,90 em breve!
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-lg text-gray-500 line-through">R$ 29,90</span>
                <span className="px-3 py-1 rounded-full bg-[rgba(0,166,81,0.15)] border border-[rgba(0,166,81,0.3)] text-[#00A651] text-xs font-bold">
                  -67% OFF
                </span>
              </div>

              <div className="flex items-baseline justify-center gap-1">
                <span className="text-lg text-gray-400 font-medium">R$</span>
                <span className="text-7xl sm:text-8xl font-black text-gradient-green leading-none">
                  9
                </span>
                <span className="text-3xl font-bold text-[#00A651]">,90</span>
              </div>

              <p className="text-gray-500 text-sm mt-3">Pagamento único · Acesso vitalício</p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent mb-8" />

            {/* What's included */}
            <div className="text-left space-y-4 mb-10">
              {included.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[rgba(0,166,81,0.15)] border border-[rgba(0,166,81,0.3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#00A651]" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a href="https://checkoutseguro.ru/checkout/cmqpw6w8r0k1w01pvhvly1mjo?offer=FO6HVJL" className="btn-cta w-full text-center block">
              🏆 QUERO MEU PACK AGORA — R$ 9,90
            </a>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#00A651]" />
                Compra segura
              </span>
              <span className="flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-[#D4A517]" />+ 3 bônus grátis
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
