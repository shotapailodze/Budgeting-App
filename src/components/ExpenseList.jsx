import React from 'react'

function ExpenseList() {
    const expenses = {
        { 
            id: 12313, 
            name: 'Shopping', 
            cost: 50, 
        },
        { 
            id: 12313, 
            name: 'Holiday', 
            cost: 300,
        },
        { 
            id: 12313, 
            name: 'Gas', 
            cost: 70, 
        },
        { 
            id: 12313, 
            name: 'ZTM', 
            cost: 50, 
        },
        { 
            id: 12313, 
            name: 'Food', 
            cost: 500,
        },
    }
  return (
    <ul>
        {expenses.map(((expense) => {
            <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
        }))}
    </ul>
  )
}

export default ExpenseList