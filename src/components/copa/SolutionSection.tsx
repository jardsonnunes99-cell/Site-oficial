import { motion } from "framer-motion";
import { FileText, Sparkles, Download, Infinity, Monitor } from "lucide-react";

const benefits = [
  { icon: FileText, text: "Pack completo em PDF" },
  { icon: Sparkles, text: "Alta qualidade" },
  { icon: Download, text: "Download imediato" },
  { icon: Infinity, text: "Acesso vitalício" },
  { icon: Monitor, text: "Compatível com celular e computador" },
];

export function SolutionSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,166,81,0.06)_0%,transparent_60%)]" />

      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-px bg-gradient-to-r from-transparent via-[rgba(0,166,81,0.3)] to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag-green mb-6 inline-flex">
            ✅ A SOLUÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
            O que você <span className="text-gradient-green">recebe</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#1a1a1a] to-[#141414] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,166,81,0.3)] transition-all duration-400 text-center"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.06)_0%,transparent_70%)]" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-[rgba(0,166,81,0.1)] border border-[rgba(0,166,81,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-[#00A651]" />
                </div>
                <p className="text-sm font-semibold text-gray-200 leading-snug">
                  {benefit.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
