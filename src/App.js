import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id : 'a1', 
      title : "Car", 
      amount : 9000, 
      date : new Date(2022, 10, 22), 
    },
    {
      id : 'a2', 
      title : "Books", 
      amount : 500, 
      date : new Date(2021, 6, 30), 
    },
    {
      id : 'a3', 
      title : "Phone", 
      amount : 1000, 
      date : new Date(2020, 8, 20), 
    },
    {
      id : 'a4', 
      title : "Laptop", 
      amount : 2000, 
      date : new Date(2022, 7, 15), 
    },
  ]
  return (
    <div className="app-container section-center">
      <NewExpense/>
     <div className="expense-wrap">
      <h1 className='section-title'> Expense List </h1>
     {
        expenses.map(expense => <ExpenseItem key={expense.id} expense = {expense}/>)
      }
     </div>
      
    </div>
  );
}

export default App;
