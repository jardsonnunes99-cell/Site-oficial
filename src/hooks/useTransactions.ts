import { useState, useEffect } from 'react';

export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
}

const STORAGE_KEY = '@MetadezK:transactions';

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to load transactions", e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    } catch (e) {
      console.error("Failed to save transactions", e);
    }
  }, [transactions]);

  const addTransaction = (type: TransactionType, amount: number, description: string, date: string) => {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      type,
      amount,
      description,
      date,
    };
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const faturamento = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const despesas = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const caixa = faturamento - despesas;
  const lucro = caixa; // Same for this simple logic
  
  const goal = 10000;
  // Progress is based on Faturamento or Caixa? "Toda entrada de dinheiro aumenta o faturamento... mostrar quanto falta para atingir a meta...". Usually a financial goal of 10k is based on Caixa/Lucro or Faturamento? The user says "Toda despesa reduz o lucro." and "Atualizar caixa. Atualizar gráficos". I will base the goal on Caixa (current money available) to be conservative, or maybe Faturamento? Wait, "Toda despesa reduz o lucro... mostrar claramente quanto falta para atingir a meta". Let's base it on `caixa`, since if I have an expense I am further from the goal.
  const progressPercent = Math.min((caixa / goal) * 100, 100);

  return {
    transactions,
    addTransaction,
    faturamento,
    despesas,
    caixa,
    lucro,
    progressPercent,
    goal,
  };
}
