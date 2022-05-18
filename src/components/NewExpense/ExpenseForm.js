import React, { useState, useRef } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {

    const enteredTitle = useRef()
    const expense = useRef()
    const date = useRef()

    const [openForm, setOpenForm] = useState(false)

    const resetForm = () => {
        enteredTitle.current.value = '';
        expense.current.value = '';
        date.current.value = '';
    }

    const submitHandler = event => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle.current.value,
            amount: +expense.current.value,
            date: new Date(date.current.value)
        }
        props.dataHandler(expenseData)
        resetForm()
        setOpenForm(false)
    }

    const openFormHandler = event => {
        event.preventDefault()
        setOpenForm(!openForm)
        if (!openForm) {resetForm()}
    }
    
    if (!openForm) {
        return (
            <div className="new-expense__controls" >
                <button style={{margin:"auto"}} onClick={openFormHandler} >Add New Expense</button>
            </div>
        )
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls" >
                <div className="new-expense__control" >
                    <label>Title</label>
                    <input type="text" ref={enteredTitle} />
                </div>
            </div>
            <div className="new-expense__controls" >
                <div className="new-expense__control" >
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" ref={expense} />
                </div>
            </div>
            <div className="new-expense__controls" >
                <div className="new-expense__control" >
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="3000-12-31" ref={date} />
                </div>
            </div>
            <div className='new-expense__actions' >
                <button type="reset" onClick={openFormHandler} >Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm