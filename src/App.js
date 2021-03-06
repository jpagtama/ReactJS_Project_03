import React, { useState, useContext } from 'react'
import AuthContext from './components/Authentication/auth-context'
import LoginForm from './components/Authentication/LoginForm'
import Header from './components/UI/Header'
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
  ]

  const ctx = useContext(AuthContext)
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
    <React.Fragment >
      {displayModal && <ErrorModal onDismissModal={dismissModalHandler} />}
      {!ctx.isLoggedIn && <LoginForm onOpenModal={openModalHandler} /> }
      {ctx.isLoggedIn && <Header /> }
      <NewExpense expenseHandler={savedExpenseHandler} onOpenModal={openModalHandler} />
      <Expenses expenses={expenseList} />
    </React.Fragment>
  )
}

export default App;
