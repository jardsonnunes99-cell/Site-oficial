import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { TransactionType } from '@/hooks/useTransactions';

interface TransactionModalProps {
  type: TransactionType;
  onSave: (type: TransactionType, amount: number, description: string, date: string) => void;
}

export function TransactionModal({ type, onSave }: TransactionModalProps) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const isIncome = type === 'income';

  const handleSave = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) return;
    if (!description) return;
    
    onSave(type, Number(amount), description, date);
    
    // Reset and close
    setAmount('');
    setDescription('');
    setDate(new Date().toISOString().split('T')[0]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={isIncome ? 'default' : 'destructive'} 
          className={`w-full flex items-center gap-3 h-14 text-lg font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 ${isIncome ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400' : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400'}`}
        >
          {isIncome ? <PlusCircle className="w-6 h-6" /> : <MinusCircle className="w-6 h-6" />}
          {isIncome ? 'Adicionar Entrada' : 'Adicionar Despesa'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#0a0a0a]/90 backdrop-blur-2xl text-white border-white/10 rounded-3xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-extrabold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            {isIncome ? 'Nova Entrada' : 'Nova Despesa'}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-6">
          <div className="grid gap-2">
            <Label htmlFor="amount" className="text-zinc-400 font-semibold tracking-wide">Valor (R$)</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ex: 150.00"
              className="bg-white/5 border-white/10 text-white h-14 rounded-2xl text-xl font-medium focus-visible:ring-green-500/50 focus-visible:border-green-500/50"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-zinc-400 font-semibold tracking-wide">Descrição</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={isIncome ? "Ex: Venda de produto" : "Ex: Anúncios"}
              className="bg-white/5 border-white/10 text-white h-14 rounded-2xl text-xl font-medium focus-visible:ring-green-500/50 focus-visible:border-green-500/50"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date" className="text-zinc-400 font-semibold tracking-wide">Data</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-white/5 border-white/10 text-white h-14 rounded-2xl text-xl font-medium focus-visible:ring-green-500/50 focus-visible:border-green-500/50"
            />
          </div>
        </div>
        <Button 
          onClick={handleSave} 
          className={`w-full h-14 text-xl font-bold rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] ${isIncome ? 'bg-gradient-to-r from-green-600 to-green-500 hover:shadow-green-500/20' : 'bg-gradient-to-r from-red-600 to-red-500 hover:shadow-red-500/20'}`}
        >
          Salvar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
