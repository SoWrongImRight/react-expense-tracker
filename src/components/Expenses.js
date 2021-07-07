import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const { expenses } = props

    expenses.map(expenses => {
        return (
            <div>
                <h2>Expense display object.</h2>
                <ExpenseItem data={expenses} />,
            </div>
        )
    }
}

export default Expenses;