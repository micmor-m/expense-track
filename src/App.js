import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
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
  ];

  const [expenses, setExpenses] = useState(expensesArr);

  function expenseHandler(expense) {
    console.log(expense);
    const id = `e${Math.round(Math.random() * 100)}`;
    const newExpense = { ...expense, id: id };
    console.log("newExpense", newExpense);
    setExpenses([...expenses, newExpense]);
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
