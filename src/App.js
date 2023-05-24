import "./App.css"

import Expenses from "./Componet/ExpenseComp/Expenses"

function App() {
  const expense = [
    {
      id: "avd1",
      date: new Date(2021, 3, 4),
      title: "buying cloth",
      price: 230,
    },
    {
      id: "acd2",
      date: new Date(2020, 2, 4),
      title: "maintenace my computer",
      price: 140,
    },
    {
      id: "dvi3",
      date: new Date(2022, 3, 4),
      title: "car wash",
      price: 30,
    },
  ]
  return (
    <div>
      <h1>Expense list</h1>
      <Expenses expense={expense} />
    </div>
  )
}

export default App
