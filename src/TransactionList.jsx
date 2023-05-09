/* eslint-disable react/prop-types */
import Transaction from './Transaction';

function TransactionList({ transactions }) {
  return (
    <div className='transaction-list'>
      <h2>Transaction List</h2>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;
