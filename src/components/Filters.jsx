import { memo } from 'react';
import { CATEGORIES } from '../constants';

function Filters({ filterType, filterCategory, onTypeChange, onCategoryChange }) {
  return (
    <div className="filters">
      <select value={filterType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select value={filterCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All Categories</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

export default memo(Filters);
