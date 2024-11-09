import React, { useState } from 'react'

function Gen() {
const[num,setNum] =useState('')

const randomnumberRange=(min,max)=>{
  return   Math.floor(Math.random()* max-min +1) +min

}
const handleClick=()=>{

    setNum(randomnumberRange(1,100))
}

  return (
    <div>
      <h1> Generate Number:{num}</h1>
      <button onClick={handleClick}>Answer</button>

    </div>
  )
}

export default Gen
