import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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

  return (
    <div className="App">
      <h1>Let's go!</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
