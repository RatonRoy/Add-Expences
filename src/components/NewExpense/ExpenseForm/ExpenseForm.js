import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, SetEnteredTitle] = useState('');
    const [enteredAmount, SetEnteredAmount] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        SetEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        SetEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        SetEnteredDate(event.target.value);
    }
    // console.log(enteredTitle);

    const sumbitChangeHandler = (event) => {
        event.preventDefault()
        // console.log(enteredTitle, enteredDate, enteredAmount);`

        const expenses = {
            title : enteredTitle, 
            amount : enteredAmount, 
            date : new Date(enteredDate), 
        }
        props.onSaveExpenseData(expenses)

        // console.log(expenses);

        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');
    }

    return (
        <form className='form-wrap section-center'
            onSubmit={sumbitChangeHandler}
        >
            <div className="title-amount-container">
                {/* single input  */}
                <div className="form-control">
                    <label htmlFor="title"> Title </label>
                    <input type="text" name="title" className='input-field' 
                    onChange={titleChangeHandler}
                    value = {enteredTitle}
                    />
                </div>
                {/* single input end  */}
                {/* single input  */}
                <div className="form-control">
                    <label htmlFor="amount"> Amount </label>
                    <input type="number" name="amount" className='input-field' min= '5' 
                    onChange={amountChangeHandler}
                    value = {enteredAmount}
                    />
                </div>
                {/* single input end  */}
            </div>
            {/* End of title and amount container  */}
            <div className="date-button-container">
                 {/* single input  */}
                <div className="form-control">
                    <label htmlFor="date"> Amount </label>
                    <input type="date" name="date" className='input-field' min= '2018-01-01' max = '2022-12-31' 
                    onChange={dateChangeHandler}
                    value = {enteredDate}
                    />
                </div>
                {/* single input end  */}
                 {/* single input  */}
                <div className="form-control">
                {/* single input end  */}
                    <button type="submit" className="btn-submit">
                        Add Expense 
                    </button>
                </div>
                   
                
            </div>
           
        </form>
    );
};

export default ExpenseForm;