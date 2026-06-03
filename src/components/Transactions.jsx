import { useState, useMemo } from 'react';
import Filters from './Filters';
import TransactionList from './TransactionList';
import ConfirmModal from './ConfirmModal';

function Transactions({ transactions, onDelete }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [pendingDelete, setPendingDelete] = useState(null);

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
      <TransactionList
        transactions={filteredTransactions}
        onRequestDelete={setPendingDelete}
      />

      {pendingDelete && (
        <ConfirmModal
          message={`Delete "${pendingDelete.description}"?`}
          onConfirm={() => {
            onDelete(pendingDelete.id);
            setPendingDelete(null);
          }}
          onCancel={() => setPendingDelete(null)}
        />
      )}
    </div>
  );
}

export default Transactions;
