import { useState, useEffect } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenseList] = useState(expenses)
  useEffect(() => console.log("Current Expenses List: ", expenseList))

  const savedExpenseHandler = data => {
    setExpenseList(prevState => {
      return [data,...prevState]
    })
  }

  return (
    <div>
      <NewExpense expenseHandler={savedExpenseHandler} />
      <Expenses expenses={expenseList} />
    </div>
  );
}

export default App;
