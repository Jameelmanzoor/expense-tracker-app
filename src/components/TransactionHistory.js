import React from 'react'

export const TransactionHistory = () => {
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        <li className='minus'>
          Cash <span>-$400</span><button className='delete-btn'></button>
        </li>
      </ul>
    </>
  )
}
