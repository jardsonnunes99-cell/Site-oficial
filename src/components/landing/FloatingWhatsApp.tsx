import { motion } from "framer-motion";
import { waLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink("Olá! Vim pelo site Diferenciado e gostaria de mais informações.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      className="whatsapp-float group"
      title="Falar no WhatsApp"
    >
      {/* Pulse rings */}
      <span className="pulse" style={{ animationDelay: "0s" }} />
      <span
        className="pulse"
        style={{
          animationDelay: "0.8s",
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "rgba(37, 211, 102, 0.30)",
          animation: "pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s infinite",
        }}
      />

      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7 relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.557 4.117 1.531 5.845L.047 23.667l5.988-1.57A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.962-1.347l-.356-.21-3.68.964.983-3.592-.232-.37A9.79 9.79 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-16 bottom-1 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        Fale conosco
        <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground" />
      </span>
    </motion.a>
  );
}
