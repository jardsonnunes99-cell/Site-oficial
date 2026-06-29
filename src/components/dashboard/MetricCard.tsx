import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  colorClass?: string;
  isCurrency?: boolean;
}

export function MetricCard({ title, value, icon, colorClass = "text-white", isCurrency = true }: MetricCardProps) {
  const formattedValue = isCurrency 
    ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    : value.toString();

  return (
    <div className="bg-[#1e1e1e] p-5 rounded-2xl border border-zinc-800/50 flex flex-col justify-center items-start shadow-sm relative overflow-hidden">
      {/* subtle gradient at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700/20 to-transparent" />
      
      <div className="flex items-center gap-2 mb-2 text-zinc-400 font-medium text-sm">
        <span className="opacity-70">{icon}</span>
        <span>{title}</span>
      </div>
      <p className={`text-2xl font-bold tracking-tight ${colorClass}`}>
        {formattedValue}
      </p>
    </div>
  );
}
