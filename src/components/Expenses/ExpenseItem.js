import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
  
  const [title_name, setTitle]=useState(props.title);
  const clickHandler=()=>{
    setTitle("pinki job");
    console.log(title_name);

  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />{" "}
      <div className="expense-item__description">
        <h2>{title_name}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      <button onClick={clickHandler}>Update Item</button>
    </Card>
  );
};
export default ExpenseItem;
