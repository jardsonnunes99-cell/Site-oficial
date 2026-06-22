import { Instagram, MessageCircle, FileText, ShieldAlert } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/jardson_diferenciado",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: waLink("Olá, quero saber mais sobre o 1% Diferenciado!"),
    icon: <MessageCircle className="w-5 h-5" />,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col items-center">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <span className="font-display text-3xl font-bold text-white tracking-tight">
            1% <span className="text-gradient-gold">Diferenciado</span>
          </span>
          <p className="text-white/50 text-sm max-w-md text-center">
            Desenvolvendo comunicação, vendas e mentalidade para aqueles que se recusam a ser
            comuns.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all bg-white/5"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Links & Legal */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40 mb-8">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" /> Termos de Uso
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" /> Política de Privacidade
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/30 text-center">
          <p>© {new Date().getFullYear()} 1% Diferenciado. Todos os direitos reservados.</p>
          <p className="mt-1">Criador: Jardson Nunes</p>
        </div>
      </div>
    </footer>
  );
}
