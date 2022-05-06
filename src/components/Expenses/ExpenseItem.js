import React, { useState, useEffect } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    useEffect(() => console.log("updated title: ", title))
    
    const clickHandler = () => {
        setTitle("Updated");
    }
    console.log('Evaluated ExpenseItem');

    return (
        <Card className="expense-item" >
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;