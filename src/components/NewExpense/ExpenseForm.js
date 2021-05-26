import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // document.getElementById('').addEventListener('click',(event)=>{});

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // const[userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });
  // const titleChangedHandler = event =>{
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value
  //   });
  // };// using spread operator
  // const titleChangedHandler = event =>{
  //   setUserInput((prevState)=>{
  //     return{
  //       ...prevState,
  //       enteredTitle: event.target.value
  //     };
  //   });
  //   };//using prevState, this will ensure that we get the latest updated state in our code.
  const submitHandler = (event) => {
    event.preventDefault(); // prevents it from reloading
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    //console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount(""); //to make the input blank after submitting the form
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="label">Title</label>
          <input
            required
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            max="2022-11-12"
            value={enteredDate} //two way binding
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
