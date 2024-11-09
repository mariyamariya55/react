import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {

    let location=useLocation()
    console.log(location.state);
    let details = location.state
    
  return (
    <div>
      <linl to='/Home'></linl>

     {details.email}

    </div>
  )
}

export default Home
