import "./App.css";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const expense=[
    {
      title:'Car wash',
      expenditure: 278.2,
      date: new Date(2021,4,21)
    },
    {
      title:'Auto wash',
      expenditure: 238.2,
      date: new Date(2021,6,22)
    },
    {
      title: 'Bike wash',
      expenditure: 222.4,
      date: new Date(2021,2,1)
    },
    {
      title: 'Truck wash',
      expenditure: 218.2,
      date: new Date(2021,3,24)
    }
  ];
  const addExpenseHandler = expense =>{
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expense}/>
    </div>
  );
}

export default App;
