import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gBrigadeiros from "@/assets/gallery-brigadeiros.jpg"; // Keep imports to avoid breaking build, use as placeholders
import gMesa from "@/assets/gallery-mesa-evento.jpg";
import gPix from "@/assets/gallery-pix-proof.jpg";

const images = [
  { src: gBrigadeiros, label: "Resultados Reais", tag: "Evolução" },
  { src: gMesa, label: "Mentalidade Forte", tag: "Disciplina" },
  { src: gPix, label: "Vendas na Prática", tag: "Lucro" },
];

const stats = [
  { value: 5000, suffix: "+", label: "Alunos" },
  { value: 20000, suffix: "+", label: "Vendas Realizadas" },
  { value: 100000, suffix: "+", label: "Pessoas Impactadas" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export function Results() {
  return (
    <section id="resultados" className="relative py-32 px-6 section-divider overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-tag justify-center">
            <span className="w-4 h-px bg-gold inline-block" />
            A Força da Tribo
            <span className="w-4 h-px bg-gold inline-block" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-white">
            Transformação <span className="text-gradient-gold">Comprovada</span>.
          </h2>
          <p className="text-white/60 text-lg">
            A maioria tenta adivinhar. O 1% segue um método validado.
          </p>
        </motion.div>

        {/* Counters */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-premium rounded-2xl p-8 text-center hover-lift border-gold/20"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/5"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 grayscale group-hover:grayscale-0"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="badge-premium text-[9px] py-1 px-3">
                  {img.tag}
                </span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold text-white">
                  {img.label}
                </p>
                <div className="mt-2 w-8 h-0.5 bg-gold-gradient rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}