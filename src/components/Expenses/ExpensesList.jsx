import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css"

const ExpensesList = (props) => {
 return (
   <ul className="expenses-list">
    {props.list.length === 0 ? (<h2 className="expenses-list__fallback">No expense in this year.</h2>) 
    : (props.list.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      }))}
   </ul>
   
 )
} 

export default ExpensesList;