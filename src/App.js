import "./App.css"

import Expenses from "./Componet/ExpenseComp/Expenses"
import NewExpense from "./Componet/NewExpense/NewExpense"
import React, { useState } from "react"
function App() {
  const [expense, setExpense] = useState([
    {
      id: "avd1",
      date: new Date(2023, 3, 4),
      title: "buying cloth",
      amount: 230,
    },
    {
      id: "acd2",
      date: new Date(2020, 2, 4),
      title: "maintenace my computer",
      amount: 140,
    },
    {
      id: "dvi3",
      date: new Date(2022, 3, 4),
      title: "car wash",
      amount: 30,
    },
  ])
  const addExpense = (expens) => {
    setExpense((prev) => [expens, ...prev])
  }
  return (
    <div>
      <h1>Expense list</h1>
      <NewExpense onAddExp={addExpense} />
      <Expenses expense={expense} />
    </div>
  )
}

export default App
