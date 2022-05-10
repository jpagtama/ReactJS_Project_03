import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from '../UI/Card'

const Expenses = (props) => {
    const [year, setYear] = useState(new Date().getFullYear().toString())

    const yearFilterHandler = yr => { setYear(yr) }

    let expenses = []

    if (year.length) {
        expenses = props.expenses.filter(element => element.date.getFullYear().toString() === year )
    } 

    const expenseList = expenses.map( element => 
        <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />
    )
    
    return ( 
        <Card className='expenses'>
            <ExpensesFilter selectedYear={year} yearHandler={yearFilterHandler} />
            {expenses.length? expenseList: <p style={{color:"white"}}>No results found</p>}
        </Card>
    )
}

export default Expenses