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
    <div className="w-full bg-[#1e1e1e] rounded-3xl p-6 shadow-xl border border-zinc-800/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />
      
      <div className="flex justify-between items-end mb-4 relative z-10">
        <div>
          <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-1">Faltam</p>
          <p className="text-3xl font-bold text-white">{formatCurrency(remaining)}</p>
        </div>
        <div className="text-right">
          <p className="text-green-400 text-3xl font-bold">{progress.toFixed(1)}%</p>
          <p className="text-zinc-400 text-sm mt-1">concluído</p>
        </div>
      </div>

      <div className="w-full h-6 bg-zinc-800 rounded-full overflow-hidden relative z-10 shadow-inner">
        <motion.div 
          className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent rounded-full" />
        </motion.div>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm font-medium text-zinc-500 relative z-10">
        <span>R$ 0</span>
        <span className="text-zinc-300">Meta: {formatCurrency(goalValue)}</span>
      </div>
    </div>
  );
}
