import React, { useState, useEffect } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from '../UI/Card'

const Expenses = (props) => {
    const [year, setYear] = useState(new Date().getFullYear())
    useEffect(() => console.log("Year Selected: ", year))

    const yearFilterHandler = yr => { setYear(yr) }

    const expenses = props.expenses.map( element => 
        <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />
    )
    
    return <><Card className='expenses'><ExpensesFilter selectedYear={year} yearHandler={yearFilterHandler} />{expenses}</Card></>
}

export default Expenses