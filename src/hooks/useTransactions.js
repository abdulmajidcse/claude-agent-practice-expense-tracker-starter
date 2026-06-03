import { useState, useMemo, useCallback } from 'react';
import { INITIAL_TRANSACTIONS } from '../constants';

// Owns the transaction list plus its derived totals and the add action.
export function useTransactions() {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);

  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    let income = 0;
    let expenses = 0;
    for (const t of transactions) {
      if (t.type === "income") income += t.amount;
      else expenses += t.amount;
    }
    return { totalIncome: income, totalExpenses: expenses, balance: income - expenses };
  }, [transactions]);

  const addTransaction = useCallback(({ description, amount, type, category }) => {
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now(),
        description,
        amount: Number(amount),
        type,
        category,
        date: new Date().toISOString().split('T')[0],
      },
    ]);
  }, []);

  const deleteTransaction = useCallback((id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return {
    transactions,
    totalIncome,
    totalExpenses,
    balance,
    addTransaction,
    deleteTransaction,
  };
}
