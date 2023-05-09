/* eslint-disable react/prop-types */
function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expenses;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Income: {income}</p>
      <p>Total Expenses: {expenses}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}

export default Summary;
