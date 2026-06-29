import { useState, useEffect, useMemo } from 'react';
import { useTransactions, TransactionType } from '@/hooks/useTransactions';
import { ProgressBar } from './ProgressBar';
import { MetricCard } from './MetricCard';
import { TransactionModal } from './TransactionModal';
import { GoalReached } from './GoalReached';
import { Wallet, TrendingUp, TrendingDown, Target, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { toast } from 'sonner';

const MOTIVATIONAL_MESSAGES = [
  "Você está mais perto dos 10K! 🚀",
  "Cada venda conta. Continue! 💪",
  "Continue nesse ritmo excelente! 🔥",
  "Meta sendo construída tijolo por tijolo. 🧱",
  "Mais um passo concluído rumo ao sucesso! 🎯",
  "O topo é logo ali! ⛰️"
];

export function Dashboard() {
  const { 
    transactions, 
    addTransaction, 
    faturamento, 
    despesas, 
    caixa, 
    lucro, 
    progressPercent, 
    goal 
  } = useTransactions();

  const [showGoalReached, setShowGoalReached] = useState(false);
  const [hasReachedGoal, setHasReachedGoal] = useState(false);

  // Check for goal completion
  useEffect(() => {
    if (caixa >= goal && !hasReachedGoal) {
      setShowGoalReached(true);
      setHasReachedGoal(true);
    } else if (caixa < goal) {
      setHasReachedGoal(false);
    }
  }, [caixa, goal, hasReachedGoal]);

  const handleSaveTransaction = (type: TransactionType, amount: number, description: string, date: string) => {
    addTransaction(type, amount, description, date);
    
    if (type === 'income') {
      const msg = MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)];
      toast.success(msg, {
        style: { background: 'rgba(22, 163, 74, 0.9)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }
      });
    } else {
      toast.error('Despesa adicionada.', {
        style: { background: 'rgba(220, 38, 38, 0.9)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }
      });
    }
  };

  // Prepare chart data (cumulative income over time)
  const chartData = useMemo(() => {
    let cumulative = 0;
    const sortedIncomes = transactions
      .filter(t => t.type === 'income')
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    // If no data, show a flat line at 0 so chart isn't empty
    if (sortedIncomes.length === 0) return [{ date: 'Hoje', faturamento: 0 }];

    return sortedIncomes.map(t => {
      cumulative += t.amount;
      return {
        date: new Date(t.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        faturamento: cumulative
      };
    });
  }, [transactions]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 font-sans pb-24 overflow-hidden">
      
      {/* Background Orbs for Glassmorphism Effect */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-500/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 mt-4">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent drop-shadow-sm">
              MetadezK
            </h1>
            <p className="text-zinc-400 mt-1 font-medium">Acompanhamento rumo aos R$ 10.000</p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-lg">
            <Target className="w-6 h-6 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            <span className="font-bold text-white text-lg tracking-wide">Meta: R$ 10.000</span>
          </div>
        </header>

        {/* Progress Bar */}
        <ProgressBar progress={progressPercent} currentValue={caixa} goalValue={goal} />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <MetricCard title="Caixa Atual" value={caixa} icon={<Wallet className="w-5 h-5" />} colorClass={caixa >= 0 ? "text-white drop-shadow-md" : "text-red-400"} />
          <MetricCard title="Faturamento" value={faturamento} icon={<TrendingUp className="w-5 h-5 text-green-400" />} />
          <MetricCard title="Despesas" value={despesas} icon={<TrendingDown className="w-5 h-5 text-red-400" />} />
          <MetricCard title="Lucro Atual" value={lucro} icon={<Activity className="w-5 h-5 text-blue-400" />} colorClass={lucro >= 0 ? "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]" : "text-red-400"} />
        </div>

        {/* Chart Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white/90">
            <TrendingUp className="w-6 h-6 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            Evolução do Faturamento
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFaturamento" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" vertical={false} />
                <XAxis dataKey="date" stroke="#a1a1aa" fontSize={13} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#a1a1aa" fontSize={13} tickLine={false} axisLine={false} tickFormatter={(val) => `R$${val}`} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(24, 24, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', color: 'white', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                  itemStyle={{ color: '#4ade80', fontWeight: 'bold' }}
                  formatter={(value: number) => [`R$ ${value.toFixed(2)}`, 'Faturamento']}
                  cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
                />
                <Area type="monotone" dataKey="faturamento" stroke="#4ade80" strokeWidth={4} fillOpacity={1} fill="url(#colorFaturamento)" activeDot={{ r: 6, fill: '#fff', stroke: '#4ade80', strokeWidth: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Actions (Floating on Mobile) */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent md:relative md:bg-none md:p-0 z-40">
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
            <TransactionModal type="income" onSave={handleSaveTransaction} />
            <TransactionModal type="expense" onSave={handleSaveTransaction} />
          </div>
        </div>

      </div>

      <GoalReached show={showGoalReached} onClose={() => setShowGoalReached(false)} />
    </div>
  );
}
