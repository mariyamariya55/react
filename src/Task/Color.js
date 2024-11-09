import React, { useState } from 'react'

function Color() {

    const[enter,setEnter]=useState('')

  return (
    <div onMouseEnter={()=>setEnter(true)}
    onMouseLeave={()=>setEnter(false)}
    style={{
height:'100px',
width:'100px',
backgroundColor:enter?'lightblue':'lightgray'

    }}>
    hover me
    </div>
  )
}

export default Color
