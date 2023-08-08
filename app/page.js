"use client"
import React, { useContext } from 'react';
import { useState  } from 'react';
import { DataContext } from './context';
import { useRouter } from 'next/navigation';

const page = () =>{
  const router = useRouter();

  const [Expense, setExpense] = useState("");
  const [Budget, setBudget] = useState("");
  const [Calendar, setCalendar] = useState("");
  const [Data, setData] = useContext(DataContext);



  const ExpenseChangeHandler =(e)=>{
    setExpense(e.target.value);
    console.log(Expense)

  }
  const BudgetChangeHandler =(e)=>{
    setBudget(e.target.value);

    console.log(Budget)

  }
  const CalendarChangeHandler = (e) =>{
setCalendar(e.target.value);
  }
  const SubmitHandler = (e) =>{
    e.preventDefault();
    const newuser = {Expense , Budget , Calendar};
    setData([newuser]);
    setExpense("");
    setBudget("");
    router.push("/dashboard");
    }
    console.log(Data);
return (
  <div className='page' >
<div className="main">
 <h1>React Based <br /> <span>Expense</span><br/> Tracker App</h1>
 <br />
 <div className="center">
  <form onSubmit={SubmitHandler} >
  <h3>Max Expense in a Month (INR)</h3>
 <input required type="number" placeholder='Enter Expense. . .' name="" onChange={ExpenseChangeHandler}value={Expense} />
 <br /><br />
 <h3>Monthly Budget (INR)</h3>
 <input required type="number" name="" placeholder='Enter Budget. . .'  onChange={BudgetChangeHandler} value={Budget} />
 <br /><br />
 <h3>Month</h3>
 <input required type="date" name="" onChange={CalendarChangeHandler} value={Calendar}/>
 <input type="submit" value="Proceed" className='submit' />
</form>



 </div>

</div>
  </div>
)

}

export default page;