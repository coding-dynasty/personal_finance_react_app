import './App.scss';

import Summary from './Summary';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import transactionsData from './data/transactions';
import  { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState(transactionsData);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="container">
      <TransactionForm onAddTransaction={addTransaction} transactions={transactions} />
      <Summary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
