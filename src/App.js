import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesArr = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 300,
    date: new Date("June 21, 2021"),
  },
  {
    id: "e2",
    title: "Grocery",
    amount: 56.67,
    date: new Date("June 20, 2021"),
  },
  { id: "e3", title: "Rent", amount: 1200, date: new Date("June 1, 2021") },
  { id: "e4", title: "Book", amount: 26, date: new Date("June 15, 2021") },
  {
    id: "e5",
    title: "Bread",
    amount: 3,
    date: new Date("January 18, 2019"),
  },
  {
    id: "e6",
    title: "Shorts",
    amount: 23,
    date: new Date("July 1, 2019"),
  },
  { id: "e7", title: "Bonnet", amount: 12, date: new Date("December 3, 2020") },
  {
    id: "e8",
    title: "Printer",
    amount: 80,
    date: new Date("October 25, 2020"),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expensesArr);

  function expenseHandler(expense) {
    console.log(expense);
    const id = `e${Math.round(Math.random() * 100)}`;
    const newExpense = { ...expense, id: id };
    console.log("newExpense", newExpense);
    setExpenses([newExpense, ...expenses]); //here the new element is PRE-pend in the array to be shown on the top
  }

  console.log("Expenses", expenses);

  return (
    <div className="App">
      <h1>Let's go!</h1>
      <NewExpense expenseHandler={expenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
