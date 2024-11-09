import React, { useState } from 'react'

function Captial() {
const [captial, setCaptial] =useState()


const result=()=>{

    setCaptial(captial.charAt(0).toUpperCase()+captial.slice(1))
}


  return (
    <div>
        <h1> captial</h1>
        <input type='text'  onChange={(e)=>{setCaptial(e.target.value)}}/>
        <button onClick={result}> submit</button>
        {captial}
      
    </div>
  )
}

export default Captial
