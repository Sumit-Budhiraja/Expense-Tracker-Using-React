//import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
  
  //const [title_name, setTitle]=useState(props.title);
  // const clickHandler=()=>{
  //   setTitle("pinki job");
  //   console.log(title_name);

  // }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />{" "}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      {/* <button onClick={clickHandler}>Update Item</button> */}
    </Card>
    </li>
  );
};
export default ExpenseItem;
