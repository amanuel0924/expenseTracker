import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import React, { useState, useEffect } from "react"

function ExpenseItem(props) {
  const [title, setTitle] = useState({ title: props.title })

  function handleClick() {
    setTitle({ title: "updated" })
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={handleClick}>change</button>
      </div>
    </Card>
  )
}
export default ExpenseItem
