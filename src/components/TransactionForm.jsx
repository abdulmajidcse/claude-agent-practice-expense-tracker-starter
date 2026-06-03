import { useState } from 'react';
import { CATEGORIES } from '../constants';

const EMPTY_FORM = { description: "", amount: "", type: "expense", category: "food" };

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY_FORM);

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount) return;

    onAdd(form);
    setForm(EMPTY_FORM);
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={updateField("description")}
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={updateField("amount")}
        />
        <select value={form.type} onChange={updateField("type")}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={form.category} onChange={updateField("category")}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;
