import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
    let expenses = props.expenses.map((element) => {
        return (
            <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />
        )
    })
    
    return <div className='expenses'>{expenses}</div>
}

export default Expenses