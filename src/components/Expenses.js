import ExpenseItem from './ExpenseItem';
import ExpenseDate from './ExpenseDate';
import './Expenses.css'
import { useState } from 'react';
import Card from './Card';
import ExpensesFilter from './ExpenseFilter';
function Expenses(props)
{
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  
      return (
        <Card className="expenses">
           <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       
       {props.items.map(expense=><ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
       
      
      
        </Card>
      );
}
export default Expenses;