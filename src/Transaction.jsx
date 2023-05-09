/* eslint-disable react/prop-types */

function Transaction({ transaction }) {
  const { type, description, amount } = transaction;
  const isExpense = type === 'expense';
  const transactionClass = isExpense ? 'expense' : 'income';

  return (
    <div className={`transaction ${transactionClass}`}>
      <div 
      className={`tansaction-type ${transactionClass}`}>
      {type}</div>
      <div className="description">{description}</div>
      <div className="amount">{amount}</div>
    </div>
  );
}

export default Transaction;
