import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearDrop = (yearSelected) => {
    setSelectedYear(yearSelected);
  };
  const yearSpecificExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={selectedYear}
          onSelectedYear={selectedYearDrop}
        />
        <ExpensesChart expenses ={yearSpecificExpenses}/>
      <ExpensesList yearSpecificExpenses={yearSpecificExpenses}/>
      </Card>
    </div>
  );
}
