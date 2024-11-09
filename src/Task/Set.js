import React, { useState } from 'react'

function Set() {
const[entre,setEnter]=useState('')

  return (
    <div onMouseEnter={()=>setEnter(true)}
    onMouseLeave={()=>setEnter(false)}
    style={{height:'100px',width:'100px'}}>
      {entre&&<div>visible</div>}
    </div>
  )
}

export default Set
// {visible && <div>enter here</div>}