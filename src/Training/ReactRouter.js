import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ReactRouter() {
  let nav = useNavigate()
    
    function handleButton(){
      
        console.log("navigation")
        nav('/grand')

    }
  return (
    <div>
        <h1>React router dom</h1>
        <Link to='/FormExample'>
        <button>form</button>
        </Link>
        <a href='/color'>color</a>
        <button onClick={handleButton}>grade</button>  
        {/* if we need to call a fn in a button , we can navigate through useNavigate hook */}
      
    </div>
  )
}

export default ReactRouter
