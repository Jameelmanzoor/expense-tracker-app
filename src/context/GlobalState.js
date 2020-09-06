import React, {createContext, useReducer} from 'react';

// Initial State

const initialState = {
    // Dummy Transactions Used at initial States
    transactions: [
        {id: 1, description: 'Flower', amount: -20},
        {id: 2, description: 'Salary', amount: 300},
        {id: 3, description: 'Book', amount: -10},
        {id: 4, description: 'Camera', amount: -150}
    ]
}