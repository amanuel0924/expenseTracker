import React from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react"

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpense = (enteredData) => {
    const saveData = {
      ...enteredData,
      id: Math.random().toString(),
    }
    props.onAddExp(saveData)
    setIsEditing(false)
  }
  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>addExpense</button>}

      {isEditing && (
        <ExpenseForm saveExpense={saveExpense} onCancel={stopEditingHandler} />
      )}
    </div>
  )
}
export default NewExpense
