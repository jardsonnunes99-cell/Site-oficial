import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

export function StickyTimer() {
  // Start with 15 minutes (900 seconds)
  const [timeLeft, setTimeLeft]] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft === 0) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#D4A517] via-[#F0C040] to-[#D4A517] text-[#111111] py-2 px-4 shadow-lg border-b border-[rgba(255,255,255,0.2)]"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        <p className="font-bold text-sm sm:text-base flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          OFERTA DE LANÇAMENTO EXPIRA EM:
        </p>
        <div className="flex items-center gap-2 font-black text-xl sm:text-2xl tracking-widest font-mono">
          <Timer className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>{minutes.toString().padStart(2, "0")}</span>
          <span className="animate-pulse">:</span>
          <span>{seconds.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </motion.div>
  );
}
