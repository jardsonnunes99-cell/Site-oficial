import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

// ── Atualize os links das redes sociais aqui ──
const socials = [
  {
    label: "WhatsApp",
    href: waLink("Olá! Vim pelo site Diferenciado."),
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.557 4.117 1.531 5.845L.047 23.667l5.988-1.57A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.962-1.347l-.356-.21-3.68.964.983-3.592-.232-.37A9.79 9.79 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
      </svg>
    ),
    color: "hover:bg-green-500/20 hover:border-green-500/50",
    textColor: "group-hover:text-green-400",
  },
  {
    label: "Instagram",
    href: "https://instagram.com", // ← atualize
    icon: <Instagram className="w-4 h-4" />,
    color: "hover:bg-pink-500/20 hover:border-pink-500/50",
    textColor: "group-hover:text-pink-400",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com", // ← atualize
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
      </svg>
    ),
    color: "hover:bg-white/10 hover:border-white/30",
    textColor: "group-hover:text-foreground",
  },
  {
    label: "Kwai",
    href: "https://kwai.com", // ← atualize
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 13.5l-5-3v-5h2v4l4 2.4-1 1.6z"/>
      </svg>
    ),
    color: "hover:bg-orange-500/20 hover:border-orange-500/50",
    textColor: "group-hover:text-orange-400",
  },
];

const quickLinks = [
  { label: "Início", href: "#top" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#resultados" },
  { label: "Encomendas", href: "#encomendas" },
  { label: "Revenda", href: "#revenda" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 mt-16">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 relative">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-sm">
                <span className="text-sm font-bold text-primary-foreground">D</span>
              </div>
              <span className="font-display text-2xl font-bold text-gradient-gold tracking-tight">
                Diferenciado
              </span>
            </div>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              Produtos artesanais premium, treinamento comercial e programa de
              revenda. Uma experiência que vai além do sabor — é um negócio.
            </p>

            {/* Location */}
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-8">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>
                Paraíba &amp; Pernambuco
                <br />
                <span className="text-xs">Encomendas e entregas em todo o estado</span>
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`group w-10 h-10 rounded-full glass border border-border/40 flex items-center justify-center transition-all duration-300 ${s.color}`}
                >
                  <span className={`text-muted-foreground transition-colors duration-300 ${s.textColor}`}>
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <div className="section-tag mb-5">Links Rápidos</div>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="section-tag mb-5">Contato &amp; Atendimento</div>
            <div className="space-y-4">
              <a
                href={waLink("Olá! Vim pelo site Diferenciado e quero mais informações.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/25 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div>
                  <div className="font-medium text-foreground/80">WhatsApp</div>
                  <div className="text-xs">(21) 99017-9311</div>
                </div>
              </a>

              <div className="glass-gold rounded-2xl p-5 mt-6">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  Horário de atendimento
                </p>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sábado
                  <br />
                  <span className="text-foreground/80 font-medium">08:00 — 20:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="text-gradient-gold font-medium">Diferenciado</span>.
            Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Desenvolvido com excelência e propósito. ✦
          </p>
        </div>
      </div>
    </footer>
  );
}