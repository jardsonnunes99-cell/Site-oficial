import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0 to 100
  currentValue: number;
  goalValue: number;
}

export function ProgressBar({ progress, currentValue, goalValue }: ProgressBarProps) {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  const remaining = Math.max(goalValue - currentValue, 0);

  return (
    <div className="w-full bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 shadow-2xl border border-white/10 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="flex justify-between items-end mb-6 relative z-10">
        <div>
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2 drop-shadow-sm">Faltam</p>
          <p className="text-4xl md:text-5xl font-black text-white drop-shadow-md">{formatCurrency(remaining)}</p>
        </div>
        <div className="text-right">
          <p className="text-green-400 text-3xl md:text-4xl font-extrabold drop-shadow-[0_0_12px_rgba(74,222,128,0.5)]">{progress.toFixed(1)}%</p>
          <p className="text-zinc-400 text-sm font-medium mt-1 uppercase tracking-wider">concluído</p>
        </div>
      </div>

      <div className="w-full h-8 bg-black/40 rounded-full overflow-hidden relative z-10 shadow-inner border border-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-green-600 via-green-400 to-emerald-300 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like spring
        >
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent rounded-full" />
          {/* Animated shimmer */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </motion.div>
      </div>

      <div className="flex justify-between items-center mt-5 text-sm font-semibold text-zinc-500 relative z-10 tracking-wide">
        <span>R$ 0</span>
        <span className="text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">Meta: {formatCurrency(goalValue)}</span>
      </div>
    </div>
  );
}
