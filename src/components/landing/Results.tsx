import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import gBrigadeiros from "@/assets/gallery-brigadeiros.jpg";
import gMesa from "@/assets/gallery-mesa-evento.jpg";
import gPix from "@/assets/gallery-pix-proof.jpg";

const images = [
  { src: gBrigadeiros, label: "Brigadeiros Artesanais", tag: "Qualidade" },
  { src: gMesa, label: "Mesa de Evento Premium", tag: "Experiência" },
  { src: gPix, label: "Vendas Comprovadas", tag: "Resultados" },
];

const stats = [
  { value: 400, suffix: "+", label: "Clientes Atendidos" },
  { value: 1000, suffix: "+", label: "Produtos Vendidos" },
  { value: 30, suffix: "+", label: "Eventos Realizados" },
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
    <section id="resultados" className="relative py-32 px-6 section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px]" />
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
            <span className="w-4 h-px bg-primary inline-block" />
            Resultados Reais
            <span className="w-4 h-px bg-primary inline-block" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Números que{" "}
            <span className="text-gradient-gold">contam histórias</span>.
          </h2>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Atendemos toda a{" "}
            <span className="text-foreground font-medium">Paraíba e Pernambuco</span>
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
              className="glass-premium rounded-2xl p-8 text-center hover-lift border-gold"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
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
              className="group relative overflow-hidden rounded-2xl border-gold"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="badge-premium text-[9px] py-1 px-3">
                  {img.tag}
                </span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold text-foreground">
                  {img.label}
                </p>
                <div className="mt-1 w-8 h-0.5 bg-gold-gradient rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}