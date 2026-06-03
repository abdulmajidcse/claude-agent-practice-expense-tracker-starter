import Summary from './components/Summary';
import TransactionForm from './components/TransactionForm';
import Transactions from './components/Transactions';
import { useTransactions } from './hooks/useTransactions';
import './App.css';

function App() {
  const {
    transactions,
    totalIncome,
    totalExpenses,
    balance,
    addTransaction,
    deleteTransaction,
  } = useTransactions();

  return (
    <div className="app">
      <h1>Finance Tracker</h1>
      <p className="subtitle">Track your income and expenses</p>

      <Summary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        balance={balance}
      />

      <TransactionForm onAdd={addTransaction} />

      <Transactions transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;
