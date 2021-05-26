import "./App.css";
import React, { useState } from "react";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const DUMMY_DATA = [
    {
      id: "elem1",
      title: "Car wash",
      amount: 278.2,
      date: new Date(2021, 4, 21),
    },
    {
      id: "elem2",
      title: "Auto wash",
      amount: 238.2,
      date: new Date(2021, 6, 22),
    },
    {
      id: "elem3",
      title: "Bike wash",
      amount: 222.4,
      date: new Date(2021, 2, 1),
    },
    {
      id: "elem4",
      title: "Truck wash",
      amount: 218.2,
      date: new Date(2021, 3, 24),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log("IN MY APPP");
    // console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
