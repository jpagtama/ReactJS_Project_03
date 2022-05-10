import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    const [year, setYear] = useState(new Date().getFullYear().toString())
    const yearFilterHandler = yr => { setYear(yr) }

    return ( 
        <Card className='expenses'>
            <ExpensesFilter selectedYear={year} yearHandler={yearFilterHandler} />
            <ExpensesList items={props.expenses} filteredYear={year} />
        </Card>
    )
}

export default Expenses