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
          className="w-full flex items-center gap-2 h-12 text-lg font-semibold rounded-xl"
        >
          {isIncome ? <PlusCircle className="w-5 h-5" /> : <MinusCircle className="w-5 h-5" />}
          {isIncome ? 'Adicionar Entrada' : 'Adicionar Despesa'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#1a1a1a] text-white border-zinc-800 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {isIncome ? 'Nova Entrada' : 'Nova Despesa'}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="amount" className="text-zinc-400">Valor (R$)</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ex: 150.00"
              className="bg-[#2a2a2a] border-zinc-700 text-white h-12 rounded-xl text-lg"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-zinc-400">Descrição</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={isIncome ? "Ex: Venda de produto" : "Ex: Anúncios"}
              className="bg-[#2a2a2a] border-zinc-700 text-white h-12 rounded-xl text-lg"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date" className="text-zinc-400">Data</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-[#2a2a2a] border-zinc-700 text-white h-12 rounded-xl text-lg"
            />
          </div>
        </div>
        <Button 
          onClick={handleSave} 
          className={`w-full h-12 text-lg font-bold rounded-xl ${isIncome ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
        >
          Salvar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
