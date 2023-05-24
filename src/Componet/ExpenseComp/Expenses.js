import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

function Expenses({ expense }) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={expense[0].date}
        title={expense[0].title}
        price={expense[0].price}
      />
      <ExpenseItem
        date={expense[1].date}
        title={expense[1].title}
        price={expense[1].price}
      />
      <ExpenseItem
        date={expense[2].date}
        title={expense[2].title}
        price={expense[2].price}
      />
    </Card>
  )
}
export default Expenses
