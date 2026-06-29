import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  colorClass?: string;
  isCurrency?: boolean;
}

export function MetricCard({ title, value, icon, colorClass = "text-white drop-shadow-sm", isCurrency = true }: MetricCardProps) {
  const formattedValue = isCurrency 
    ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    : value.toString();

  return (
    <div className="bg-white/5 backdrop-blur-lg p-5 md:p-6 rounded-3xl border border-white/10 flex flex-col justify-center items-start shadow-xl relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
      {/* subtle gradient at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex items-center gap-2 mb-3 text-zinc-300 font-semibold text-sm tracking-wide">
        <span className="opacity-80 drop-shadow-md">{icon}</span>
        <span>{title}</span>
      </div>
      <p className={`text-2xl md:text-3xl font-extrabold tracking-tight ${colorClass}`}>
        {formattedValue}
      </p>
    </div>
  );
}
