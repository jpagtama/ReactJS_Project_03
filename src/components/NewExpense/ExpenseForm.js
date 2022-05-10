import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
    // More common in projects. Below creates multiple states
    const [enteredTitle, setEnteredTitle] = useState('')
    const [expense, setExpense] = useState('')
    const [date, setDate] = useState('')

    const titleHandler = (event) => {setEnteredTitle(event.target.value)}
    const expenseHandler = (event) => {setExpense(event.target.value)}
    const dateHandler = (event) => {setDate(event.target.value)}

    const submitHandler = event => {
        event.preventDefault()
        
        const expenseData = {
            title: enteredTitle,
            amount: expense,
            date: new Date(date)
        }

        props.dataHandler(expenseData)

        setEnteredTitle('');
        setExpense('');
        setDate('');
    }
    

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls" >
                <div className="new-expense__control" >
                    <label>Title</label>
                    <input type="text" onChange={titleHandler} value={enteredTitle} />
                </div>
            </div>
            <div className="new-expense__controls" >
                <div className="new-expense__control" >
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={expenseHandler} value={expense} />
                </div>
            </div>
            <div className="new-expense__controls" >
                <div className="new-expense__control" >
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateHandler} value={date} />
                </div>
            </div>
            <div className='new-expense__actions' >
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm