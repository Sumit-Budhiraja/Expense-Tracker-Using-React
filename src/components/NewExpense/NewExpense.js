import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            //id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    const[isEditing,setIsEditing]=useState(false);
    const onEditingHandler = () =>{
        setIsEditing(true);
    }
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
return(
    <div className='new-expense'>
    {!isEditing && <button onClick={onEditingHandler} > Add New Expense </button>}
    {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
)

}

export default NewExpense;