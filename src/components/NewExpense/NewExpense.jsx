import React, { useState } from 'react';

import "./NewExpense.css"


const NewExpense = (props) => {

// const [date, setDate] = useState("")
// const [title, setTitle] = useState("")
// const [amount, setAmount] = useState(0)

const [expense, setExpense] = useState({date: "", title: "", amount: 0})

function dateHandler(event){
  // setDate(new Date(event.target.value))
  setExpense((prev)=>{return {...prev, date: (event.target.value)}})
}

function titleHandler(event){
  //setTitle(event.target.value)
  setExpense((prev)=>{return {...prev, title: event.target.value}})
}

function amountHandler(event){
  // setAmount(parseFloat(event.target.value))
  setExpense((prev)=>{return {...prev, amount: parseFloat(event.target.value)}})
}

function submitHandler (event){
  event.preventDefault();
  props.expenseHandler({...expense, date:new Date(date)}) 
  console.log("HI there")
  setExpense((prev)=>{return {...prev, date: "", title: "", amount: 0}})
}

 const {date, title, amount} = expense

  return (
    <div className="new-expense">
      <form action="" method="">
        <div className="new-expense__controls">
          <div  className="new-expense__control">
            <label >Title</label>
            <input id="title" onChange={titleHandler} type="text" value={title} placeholder="My expense"/>
          </div>
          <div className="new-expense__control">
            <label >Amount</label>
            <input id="amount" onChange={amountHandler} type="number" min="0.01" step="0.01" value={amount} placeholder="100"/>
          </div>
          <div className="new-expense__control">
            <label >Date</label>
            <input id="date" onChange={dateHandler} type="date" min="2021-01-01" max="2022-12-31" value={date} placeholder="January 01, 2021"/>
          </div>
         
        </div>
        <div className="new-expense__actions">
        <button onClick={submitHandler}>Add Expense</button>
        </div>
      </form>
    </div>
   
  )
}

export default NewExpense;