import  React, { useState } from "react";
import "./App.css"





export default function App() {
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)
  function getData(val){
    setData(val.target.value)
    setPrint(false)
    console.log(val.target.value);
  }
  return (

<div className="App">


<div className="container">
  <div className="row justify-content-center text-center mt-3">
    <div className="col-6">
      <h1>Get value from input</h1>
    <input type="text" className="from"  onChange={getData}   /> <br/> 
<button  onClick={() => setPrint(true)}  className="btn btn-primary go">Print</button>
{
  print?
  <h1>{data}</h1>
  :null
}
    </div>
  </div>
</div>

</div>

  )
}
