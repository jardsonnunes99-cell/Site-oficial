import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#111111]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,166,81,0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,165,23,0.08)_0%,transparent_50%)]" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D4A517]"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 14}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="section-tag-green">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00A651] animate-pulse-slow" />
              COPA DO MUNDO 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6"
          >
            Complete sua coleção <span className="text-gradient-gold">sem gastar fortunas</span> em
            bancas e pacotes aleatórios.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Receba agora um pack digital com centenas de figurinhas organizadas e prontas para
            impressão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#oferta" className="btn-cta">
              🏆 QUERO MEU PACK AGORA
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-gray-500"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#00A651]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Download imediato
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#00A651]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Alta qualidade
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#00A651]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Acesso vitalício
            </span>
          </motion.div>
        </div>

        {/* Right: Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 max-w-lg"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(0,166,81,0.15)_0%,transparent_70%)] blur-2xl" />
            <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(212,165,23,0.1)_0%,transparent_70%)] blur-2xl" />

            <motion.img
              src="/images/hero-image.jpg"
              alt="Pack Digital Figurinhas Copa do Mundo"
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-[rgba(212,165,23,0.3)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
}
