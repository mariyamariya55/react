import React, { useState } from 'react'

function Check() {

const[number,setNumber]=useState()
const[check,setCheck]=useState()

const checkprime=(num)=>{

if(num<=1){

return false
}
for(let i=2;i<=num/2;i++){

    if(num%i==0){

        return false
    }
    }
return true
}
const change=(e)=>{
setNumber(e.target.value)

}
const click=()=>{

    const num=parseInt(number)
    setCheck(checkprime(num))
}

 return (
    <div>
      <h3> Check Prime Numbers</h3>
      <input type='text' value={number} onChange={change} placeholder='enter a number'/>
      <button onClick={click}> Answer</button>
      {check !==null &&(
        <p>{number} is{check?'a prime number':'not a prime number'} </p>
      )}

    </div>
  )
}

export default Check