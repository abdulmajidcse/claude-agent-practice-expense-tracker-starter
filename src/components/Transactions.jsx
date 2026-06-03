import { useState, useMemo } from 'react';
import Filters from './Filters';
import TransactionList from './TransactionList';

function Transactions({ transactions }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredTransactions = useMemo(
    () =>
      transactions.filter(
        (t) =>
          (filterType === "all" || t.type === filterType) &&
          (filterCategory === "all" || t.category === filterCategory)
      ),
    [transactions, filterType, filterCategory]
  );

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <Filters
        filterType={filterType}
        filterCategory={filterCategory}
        onTypeChange={setFilterType}
        onCategoryChange={setFilterCategory}
      />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default Transactions;
