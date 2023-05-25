import React from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

function NewExpense(props) {
  const saveExpense = (enteredData) => {
    const saveData = {
      ...enteredData,
      id: Math.random().toString(),
    }
    props.onAddExp(saveData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm saveExpense={saveExpense} />
    </div>
  )
}
export default NewExpense
