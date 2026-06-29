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
        style: { background: '#16a34a', color: 'white', border: 'none' }
      });
    } else {
      toast.error('Despesa adicionada.', {
        style: { background: '#dc2626', color: 'white', border: 'none' }
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
    <div className="min-h-screen bg-[#111111] text-white p-4 md:p-8 font-sans pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              MetadezK
            </h1>
            <p className="text-zinc-400">Acompanhamento rumo aos R$ 10.000</p>
          </div>
          <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 rounded-full border border-zinc-800">
            <Target className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-zinc-200">Meta: R$ 10.000</span>
          </div>
        </header>

        {/* Progress Bar */}
        <ProgressBar progress={progressPercent} currentValue={caixa} goalValue={goal} />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard title="Caixa Atual" value={caixa} icon={<Wallet className="w-4 h-4" />} colorClass={caixa >= 0 ? "text-white" : "text-red-400"} />
          <MetricCard title="Faturamento" value={faturamento} icon={<TrendingUp className="w-4 h-4 text-green-400" />} />
          <MetricCard title="Despesas" value={despesas} icon={<TrendingDown className="w-4 h-4 text-red-400" />} />
          <MetricCard title="Lucro Atual" value={lucro} icon={<Activity className="w-4 h-4 text-blue-400" />} colorClass={lucro >= 0 ? "text-green-400" : "text-red-400"} />
        </div>

        {/* Chart Section */}
        <div className="bg-[#1e1e1e] border border-zinc-800/50 rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            Evolução do Faturamento
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorFaturamento" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="date" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `R$${val}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px', color: 'white' }}
                  itemStyle={{ color: '#4ade80' }}
                  formatter={(value: number) => [`R$ ${value.toFixed(2)}`, 'Faturamento']}
                />
                <Area type="monotone" dataKey="faturamento" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorFaturamento)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Actions (Floating on Mobile) */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#111111] via-[#111111] to-transparent md:relative md:bg-none md:p-0 z-40">
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
