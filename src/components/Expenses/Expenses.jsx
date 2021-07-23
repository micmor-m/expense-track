import React from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css"
import { useState } from "react/cjs/react.development";

const Expenses = (props) => {

  const [year, setYear] = useState('2021')

  function handleFilter(selectedYear){
    console.log("event",selectedYear)
    setYear(selectedYear.target.value)
  }

  const filteredExpenses = props.expenses.filter((expense) => { return expense.date.getFullYear().toString() === year})



  return(
  <Card className="expenses">  
    <ExpensesFilter selected={year} handleFilter={handleFilter}/>
    <ExpensesList list={filteredExpenses}/>
  </Card>)
}

export default Expenses;