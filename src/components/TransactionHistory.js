import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
      {transactions.map(transaction => (<li className='minus'>
      {transaction.description} <span>-$400</span><button className='delete-btn'></button>
    </li>) )}
        
      </ul>
    </>
  )
}
