import { useState } from "react"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesFilter from "./ExpenseFilter"

function Expenses({ expense }) {
  const [filterYear, setFilterYear] = useState("2021")

  const setFilter = (year) => {
    setFilterYear(year)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={setFilter} />

      {expense.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            date={exp.date}
            title={exp.title}
            price={exp.price}
          />
        )
      })}
    </Card>
  )
}
export default Expenses
