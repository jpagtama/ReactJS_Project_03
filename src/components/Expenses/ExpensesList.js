import ExpenseItem from './ExpenseItem'
import ExpensesChart from './ExpensesChart'
import './ExpensesList.css'

const ExpensesList = props => {
    let filteredExpenses = []
    if (props.filteredYear.length) {
        filteredExpenses = props.items.filter(element => element.date.getFullYear().toString() === props.filteredYear )
    } 
    let expenseList = filteredExpenses.map( element => 
        <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />
    )

    if (!filteredExpenses.length) {return <h2 className='expenses-list__fallback' >No results found</h2>}
    return <>
        <ExpensesChart expenses={filteredExpenses} />
        <ul className="expenses-list" >{expenseList}</ul>
    </>
}

export default ExpensesList