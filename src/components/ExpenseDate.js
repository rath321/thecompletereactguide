import './ExpenseDate.css'
function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US', { month: 'long' });
    const day=props.date.toLocaleString('en-US', { day: '2-digit' });
    const year=props.date.toLocaleString('en-US', { year: 'numeric' });
    // const year=props.date.getFullYear();
 
    return (
    <div className="expense-date">
    <div className="expense-date__month">
        {month}
    </div>
    <div className="expense-date__year">{year}</div>
      
<day className="expense-date__day">
    {day}
</day>
    </div>
  );
}
export default ExpenseDate;