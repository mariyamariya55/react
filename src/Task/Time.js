import React, { useEffect, useState } from 'react'

function Time() {

const[hours,setHours]=useState('')
const[minutes,setMinutes]=useState('')
const[seconds,setSeconds]=useState('')
const[total,setTotal]=useState()


useEffect(()=>{
setTimeout(() => {
  if(total>0){
    setTotal(total-1)
  }
  else{
    return
  }
},1000)

},[total])
  
function click(){
let res=hours*60*60
  console.log(res);
  let result=minutes*60
  console.log(result);
  setTotal(Number(hours)*3600+Number(minutes)*60+Number(seconds))
  console.log(total);
}
  let minushour= Math.floor(total/3600)
  
  
  let minusmin=Math.floor(total%3600/60)
let minussec=total%60
minussec=Math.floor(minussec)

  
return (
    <div>
     <h3>Time converter</h3>
     <label>Hours:
      <input type='number' value={hours} onChange={(e)=>setHours((e.target.value))}/>
      
     </label><br></br><br></br>
     <label>Minutes:
      <input type='number' value={minutes} onChange={(e)=>setMinutes((e.target.value))}/>
     </label><br></br><br></br>
     <label>seconds:
      <input type='number' value={seconds} onChange={(e)=>setSeconds((e.target.value))}/>
     </label><br></br><br></br>
     <button onClick={click}>Convert to total</button><br></br>
     
      <p>Total :{minushour}:{minusmin}:{minussec}</p>
    </div>
  )
}

export default Time
