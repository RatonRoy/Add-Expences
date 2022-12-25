import React from 'react';
import Card from '../Card/Card';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const {title, amount, date} = props.expense;
    // console.log(title, amount, date)
   

    return (       
        <Card className="expense-container">
            <ExpenseDate date = {date} />
            <h3 className="expense-title"> {title} </h3>
            <p className="expense-amount"> {amount} </p>
        </Card>
       
    );
};

export default ExpenseItem;