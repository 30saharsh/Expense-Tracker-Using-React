"use client";
import React, { useEffect , useState , useContext } from 'react'
import { DataContext } from '../context'
import { Bar } from 'react-chartjs-2';
import BarChart from '../components/BarChart';


const page = () => {

   const [DBdata , setDBdata]   =   useContext(DataContext);
   const [ItemName, setItemName] = useState("");
   const [ItemPrice, setItemPrice] = useState("");
   const [ItemData, setItemData] = useState([]);
   const [Time, setTime] = useState("");
   const [ChartData, setChartData] = useState([]);
   const [info, setinfo] = useState({})

   useEffect(() => {
    setinfo({
      labels:  ChartData.map((data) => data.numericalTime),
      datasets: [{
        label: "Money Spent",
        data: ChartData.map((data) => data.numericalPrice),
        backgroundColor: ["#00F3BB"],
      }],
    });
  }, [ChartData]);

  let barChart = null;
  if (ChartData.length > 0) {
    barChart = <BarChart  charData={info} />;
  }




const ItemNameHandler = (e) =>{
setItemName(e.target.value);
// console.log(ItemName)
}
const ItemPriceHandler = (e) =>{
setItemPrice(e.target.value)

}
const ItemSubmitHandler = (e) =>{
  e.preventDefault();
  const numericalTime = parseInt(Time);
const numericalPrice = parseInt(ItemPrice);

const Data = {numericalPrice , numericalTime};

setChartData((prev)=>[...prev , Data]);

const Item = {ItemName , ItemPrice , Time }
  setItemData([Item]);
  setItemName("");
  setItemPrice("");
  setTime("");
}
let render = <h3>Loading Items...</h3>
if(ItemData.length > 0){
  render = ItemData.map((item , i)=>{
    return (
      <li key={i}>
        <h4>Name: {item.ItemName}</h4>
        <h4>Price: {item.ItemPrice}₹</h4>
      </li>
    )
  })
}

// console.log(ItemData);
  return (
    
    <div>
     
   <div className="dashboard">
    <div className="left">
      <div className="lefttop">
    <i className="ri-account-circle-fill"></i>
    <h2>User</h2>
    </div>
    <div className="leftbottom">
      <h2>dashboard</h2>
    </div>
    </div>
    <div className="right">

      <div className="righttop">
        {
           DBdata.map((e , i)=>{
            return(
         <div  className='item' key={i} >

          <h3>Expense : {e.Expense}</h3>
          <h3>Budget : {e.Budget}</h3>
          <br />
          <h3>For Date : {e.Calendar}</h3>

         </div>
            )
        
            })
        }

      </div>
      <h3 className='finalheading' >Note: Enter The Value Of Time in Hour in Roundfigure (Considering the 24 Hour Clock)</h3>
      <div className="rightbottom">
<div className="rbl">
<div style={{width:400}} >
{barChart}
</div>
</div>
<div className="rbr">
  <form onSubmit={ItemSubmitHandler} >
   <input  required type="text" name="" placeholder='Enter Item...' onChange={ItemNameHandler} value={ItemName} />
    <input required type="text" placeholder='Enter Item Price...' name="" onChange={ItemPriceHandler} value={ItemPrice} />
    <input type="text" placeholder='Enter Hour of Time..' onChange={(e)=>setTime(e.target.value)}  value={Time} />
    <input type="submit" value="Submit" className='rbsubmit' />
  </form>

  <div className="itemlist">
<ul>
  {render}
</ul>
  </div>
</div>

      </div>
    </div>
   </div>
    </div>
  )
}

export default page;
