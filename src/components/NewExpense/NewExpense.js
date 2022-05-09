import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const savedDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        props.expenseHandler(expenseData)
    }

    return (
        <div className="new-expense" >
            <ExpenseForm dataHandler={savedDataHandler} />
        </div>
    )
}

export default NewExpense