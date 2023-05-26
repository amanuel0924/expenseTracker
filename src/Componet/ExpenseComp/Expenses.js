import { useState } from "react"
import Card from "../UI/Card"

import "./Expenses.css"
import ExpensesFilter from "./ExpenseFilter"

import ExpensesList from "./ExpensesList"

function Expenses({ expense }) {
  const [filterYear, setFilterYear] = useState("2022")

  const setFilter = (year) => {
    setFilterYear(year)
  }
  const filteredExpenses = expense.filter((fexpense) => {
    return fexpense.date.getFullYear().toString() === filterYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={setFilter} />

      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}
export default Expenses
