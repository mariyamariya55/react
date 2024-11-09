import React, { useState } from 'react'

function Wordcount() {

    
    const[count,setCount]=useState(0)


    const handleChange=(e)=>{
      setCount(e.target.value)

    }
    const countword=(str)=>{
        return str.trim().split().filter(Boolean).length

    }

  return (
    <div>
      <h1>Word Count</h1>
      <input type="text" value={count} onChange={handleChange} placeholder='Typing'/>
      <p>Word Count:{count}</p>
    </div>
  )
}

export default Wordcount
