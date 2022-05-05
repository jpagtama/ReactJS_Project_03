import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

const Expenses = (props) => {
    let expenses = props.expenses.map((element) => {
        return (
            <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />
        )
    })
    
    return <Card className='expenses'>{expenses}</Card>
}

export default Expenses