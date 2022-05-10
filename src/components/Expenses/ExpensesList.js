import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {
    let expenses = []
    if (props.filteredYear.length) {
        expenses = props.items.filter(element => element.date.getFullYear().toString() === props.filteredYear )
    } 
    let expenseList = expenses.map( element => 
        <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />
    )

    if (!expenses.length) {return <h2 className='expenses-list__fallback' >No results found</h2>}
    return <ul className="expenses-list" >{expenseList}</ul>
}

export default ExpensesList