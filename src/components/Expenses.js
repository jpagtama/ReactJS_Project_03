import ExpenseItem from './ExpenseItem'

function Expenses(props) {
    
    return (
        props.expenses.map((element) => {
            return (
                <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />
            )
        })
    )
}

export default Expenses