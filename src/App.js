import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 300, date: "June 21, 2021" },
    { id: "e2", title: "Grocery", amount: 56.67, date: "June 20, 2021" },
    { id: "e3", title: "Rent", amount: 1200, date: "June 1, 2021" },
    { id: "e4", title: "Book", amount: 26, date: "June 15, 2021" },
  ];

  return (
    <div className="App">
      <h1>Let's go!</h1>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default App;
