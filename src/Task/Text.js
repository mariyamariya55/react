import React, { useState } from 'react'
import Child from './Child'

function Text() {
    const[type,setType]=useState('')
    // const[result,setResult]=useState()
    let x='good'
    let y='well'

    const input=(e)=>{
setType(e.target.value)
    }

  return (
    <div>
        <h3> Parent Component</h3>
        <input type='text' value={type} onChange={input}/>

      <Child data={type} value={y} info=" evening"/>
      {/* {x} */}
    </div>
  )
}

export default Text
