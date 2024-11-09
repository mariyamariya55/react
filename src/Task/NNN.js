import React from 'react'
import { useNavigate } from 'react-router-dom'

function NNN() {

let num= useNavigate()

function handleButton(){

    console.log('navigation');
    num('/Key')
    
}

  return (
    <div>
      
<button onClick={handleButton}>Agree</button>
    </div>
  )
}

export default NNN
