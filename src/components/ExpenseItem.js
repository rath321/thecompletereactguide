import './ExpenseItem.css';
import Card from './Card';
import React, { useEffect, useState } from "react";
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    const [title, setTitle]=useState(props.title);
    const ClickHandler=()=>{
        setTitle("updated");
        console.log("Click...!");
    }
     return (
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>
               {title}
            </h2>
            <div className="expense-item__price">
             ${props.amount}
            </div>
            </div>
            <button onClick={ClickHandler}>Change Title</button></Card>)
}
export default ExpenseItem;