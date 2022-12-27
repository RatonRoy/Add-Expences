import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    const {title, amount, date} = props.expense;
    // console.log(title, amount, date)
   const [titleE, setTitleE] = useState(title);
//    
   const changeClickHandler = () => {
    //    console.log(titleE);
     setTitleE("New Title");
   }

   console.log(titleE);
   console.log("Show this text when expense item component invoke");

    return (       
        <Card className="expense-container">
            <ExpenseDate date = {date} />
            <div className="title-container">
                <h3 className="expense-title"> {titleE} </h3>
                <button className='btn-update-title'

                    onClick={changeClickHandler}

                > Update Title </button>
            </div>
            <p className="expense-amount"> {amount} </p>
        </Card>
       
    );
};

export default ExpenseItem;