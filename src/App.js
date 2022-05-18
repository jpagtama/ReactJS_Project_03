import { useState } from 'react'
import ReactDOM from 'react-dom'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import ErrorModal from './components/UI/ErrorModal'

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
  const [displayModal, setDisplayModal] = useState(false)

  const savedExpenseHandler = data => {
    setExpenseList(prevState => {
      return [data,...prevState]
    })
  }
  const openModalHandler = () => {
    setDisplayModal(true)
  } 
  const dismissModalHandler = () => {
    setDisplayModal(false)
  }

  return (
    <div>
      {displayModal? ReactDOM.createPortal(<ErrorModal onDismissModal={dismissModalHandler} />, document.getElementById("modal-root")) 
      : <></>
      }
      <NewExpense expenseHandler={savedExpenseHandler} onOpenModal={openModalHandler} />
      <Expenses expenses={expenseList} />
    </div>
  );
}

export default App;
