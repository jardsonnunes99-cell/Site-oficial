import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Rocket } from "lucide-react";

// Placeholder video (Business/Urban motion)
const YOUTUBE_VIDEO_ID = "hVvEISFw9w0";

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* ── YouTube Fullscreen Video ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "max(100vw, 177.78vh)",
              height: "max(100vh, 56.25vw)",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
              title="1% Diferenciado — Vídeo Principal"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0 opacity-60"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>

        {/* Elegant dark overlay */}
        <div className="hero-overlay absolute inset-0 z-10" />
      </div>

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
          <div className="badge-premium border-gold-glow">
            Enquanto a maioria desiste, o 1% evolui.
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.06] mb-8 text-white"
        >
          Você nasceu para fazer <br className="hidden md:block" />
          parte do <span className="text-gradient-gold">1% Diferenciado</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light">
            Aprenda vendas, comunicação e mentalidade para evoluir financeiramente e se tornar
            diferenciado da maioria.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a href="#produtos" className="btn-gold group text-lg py-4 px-8 w-full sm:w-auto">
            <Rocket className="w-5 h-5" />
            QUERO EVOLUIR
          </a>
          <a
            href="#mentoria"
            className="btn-outline group flex items-center gap-2 text-lg py-4 px-8 w-full sm:w-auto border-white/20 text-white hover:border-white/50 hover:bg-white/5"
          >
            ENTRAR NA MENTORIA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 uppercase tracking-[0.25em]">Rolar</span>
        <ChevronDown className="w-4 h-4 text-gold animate-bounce-slow" />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
