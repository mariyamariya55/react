import React, { useState } from 'react'

function Agecalculator() {
const[date,setDate]=useState('')
const[age,setAge]=useState('')

const calculateAge=()=>{
const today=new Date()
const birthDate=new Date(date)
let age=today.getFullYear()-birthDate.getFullYear()
let monthdifference=today.getMonth()-birthDate.getMonth()
if(monthdifference<0 ||(monthdifference===0 && today.getDate()<birthDate.getDate())){

    age--

}
setAge(age)

}

  return (
    <div>
        
      <h1 style={{color:'blue',backgroundColor:'blueviolet'}}>Age Calculator</h1>
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
      <button onClick={calculateAge}>alculateAge</button>
      {age !==null &&<h3>Your age is:{age}</h3>}
    </div>
  )
}

export default Agecalculator
