import "./ExpenseForm.css"
import React, { useState } from "react"
const ExpenseForm = () => {
  //   const [inputs, setInputs] = useState({ title: "", amount: "", date: "" })
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")

  function handleTitile(e) {
    setTitle(e.target.value)
    // setInputs((preve) => {
    //   return { ...preve, title: e.target.value }
    // })
  }
  function handleAmaunt(e) {
    setAmount(e.target.value)
    // setInputs((preve) => {
    //   return { ...preve, amount: e.target.value }
    // })
  }
  function handleDate(e) {
    setDate(e.target.value)

    // setInputs((preve) => {
    //   return { ...preve, date: e.target.value }
    // })
  }
  function handleSubmit(e) {
    //e.priventdefault()
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={inputs.title} onChange={handleTitile} />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputs.amount}
            onChange={handleAmaunt}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            value={inputs.date}
            type="date"
            min="2019-01-01"
            max="2023-03-01"
            onChange={handleDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onSubmit={handleSubmit}>
          Add expense
        </button>
      </div>
    </form>
  )
}
export default ExpenseForm
