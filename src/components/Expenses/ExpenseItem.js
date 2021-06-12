import React from "react"; //useState is a function provided by react.
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card"

export default function ExpenseItem(props) {



  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate  date= {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}
//stateless component