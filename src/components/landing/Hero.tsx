import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { waLink } from "@/lib/whatsapp";
import { ArrowRight, ShoppingBag, ChevronDown, Sparkles } from "lucide-react";

// ⚠️  Substitua pelo ID real do vídeo do YouTube
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── YouTube Fullscreen Video ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Wrapper that keeps 16:9 centered and covers the whole screen */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "max(100vw, 177.78vh)",
              height: "max(100vh, 56.25vw)",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
              title="Diferenciado — Vídeo Principal"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>

        {/* Elegant dark overlay */}
        <div className="hero-overlay absolute inset-0 z-10" />

        {/* Noise texture overlay for depth */}
        <div
          className="absolute inset-0 z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px] animate-float-delay pointer-events-none" />

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-20 mx-auto max-w-5xl px-6 text-center pt-28 pb-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="badge-premium">
            <Sparkles className="w-3 h-3" />
            Não é apenas brigadeiro. É uma experiência única.
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.06] mb-8 text-foreground"
        >
          Transforme Sua{" "}
          <span className="text-gradient-gold">Mentalidade</span>
          {", "}
          <br className="hidden md:block" />
          Agrade Seu{" "}
          <span className="text-gradient-gold">Paladar</span> e Lucre
          <br className="hidden md:block" /> na{" "}
          <span className="text-gradient-gold">Revenda</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-3 mb-12"
        >
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Aprenda a vender sem medo, perca a timidez e crie uma{" "}
            <span className="text-foreground/95 font-medium">renda real</span> através das vendas.
          </p>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Adoce sua festa com{" "}
            <span className="text-foreground/95 font-medium">produtos exclusivos</span>
            , sabor marcante e apresentação diferenciada.
          </p>
          <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
            Leve criatividade, inovação e lucratividade para seu negócio.
            Atendemos encomendas e entregas em toda a{" "}
            <span className="text-primary font-medium">Paraíba e Pernambuco</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <a
            href="#encomendas"
            id="hero-cta-encomendar"
            className="btn-gold group"
          >
            <ShoppingBag className="w-4 h-4" />
            Fazer Minha Encomenda
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={waLink("Olá! Quero revender os produtos Diferenciado.")}
            target="_blank"
            rel="noreferrer"
            id="hero-cta-revender"
            className="btn-outline"
          >
            Quero Revender e Lucrar
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { value: "+400", label: "Clientes Atendidos" },
            { value: "+1.000", label: "Produtos Vendidos" },
            { value: "+30", label: "Eventos Realizados" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-[0.25em]">
          Rolar
        </span>
        <ChevronDown className="w-4 h-4 text-primary animate-bounce-slow" />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}