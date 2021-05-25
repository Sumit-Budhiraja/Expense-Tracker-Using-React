import "./Expenses.css";
//import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from "react";

const Expenses = (props) => {
  
  const [filteredYear,setFilteredYear]=useState('2021');

  const filterChangeHandler = (choice) => {
    setFilteredYear(choice);    
    console.log(choice);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultSelected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].expenditure}
          date={props.item[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].expenditure}
          date={props.item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].expenditure}
          date={props.item[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].expenditure}
          date={props.item[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};
export default Expenses;
