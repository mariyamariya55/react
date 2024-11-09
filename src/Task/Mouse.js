import React, { useState } from 'react'

function Mouse() {
const[color,setColor]=useState()

function handleMouseEnter(){

    setColor('blue')
}
function handleMouseLeave(){

setColor('brown')
}

  return (
    <div  style={{ backgroundColor: color }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {color}
      <button onClick={handleMouseEnter}>Click</button>
      
    </div>
  )
}

export default Mouse
