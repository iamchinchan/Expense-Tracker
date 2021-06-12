import React,{useState} from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {

  const[title,setTitle]=useState("");
  const[amount,setAmount] =useState("");
  const[date,setDate] =useState("");
  const [openForm,setOpenForm] = useState(false);

  const amountChangeHandler=(event)=>{
    setAmount(event.target.value);
  }
  const dateChangeHandler=(event)=>{
    setDate(event.target.value);
  }
  const titleChangeHandler =(event)=>{
    setTitle(event.target.value);
  }
const submitHandler=(event)=>{
  event.preventDefault();
  const expenseData={
    title:title,
    amount:+amount,
    date:new Date(date),
  }
  setOpenForm(false);
  props.onSaveExpenseData(expenseData);
  setTitle('');
  setDate('');
  setAmount('');
}

const formOpenHandler =(event)=>{
  setOpenForm(true);
}
const formCloseHandler =(event)=>{
  setOpenForm(false);
}

if(!openForm){
  return(
  <div >
        <button type="submit" onClick={formOpenHandler}>
          Add New Expense
        </button>
    </div>
  );
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input  name="title" value={title} type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input name="amount" value={amount} type="text" onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input name="date" value={date} type="date" onChange={dateChangeHandler} min="2019-01-01" step="2022-12-31" />
        </div>
      </div>
      
      <div className="new-expense__actions">
        <button type="button" onClick={formCloseHandler}>
          Cancel
        </button>
        <button type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}
