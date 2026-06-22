import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/whatsapp";

const links = [
  { label: "Início", href: "#top" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#resultados" },
  { label: "Encomendas", href: "#encomendas" },
  { label: "Aprender a vender", href: "#mentoria" },
  { label: "Revenda", href: "#revenda" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              scrolled ? "glass-dark shadow-2xl" : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <a href="#top" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gold-gradient flex items-center justify-center shadow-gold-sm">
                  <span className="text-xs font-bold text-primary-foreground">D</span>
                </div>
                <div className="absolute -inset-1 bg-gold-gradient rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <span className="font-display text-xl font-bold text-gradient-gold tracking-tight">
                Diferenciado
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#encomendas"
                className="btn-gold hidden sm:inline-flex text-sm px-6 py-3"
                style={{ borderRadius: "99px" }}
              >
                Encomendar
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Menu"
              >
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 glass-dark flex flex-col pt-24 pb-10 px-8 gap-6">
            <p className="section-tag">Navegação</p>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-foreground hover:text-gradient-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-auto">
              <a
                href={waLink("Olá! Vim pelo site Diferenciado.")}
                target="_blank"
                rel="noreferrer"
                className="btn-gold w-full"
                style={{ borderRadius: "99px" }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
