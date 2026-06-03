import { memo } from 'react';

function TransactionList({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.date}</td>
            <td>{t.description}</td>
            <td>{t.category}</td>
            <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
              {t.type === "income" ? "+" : "-"}${t.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(TransactionList);
