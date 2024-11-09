import React from 'react'
import { useLocation } from 'react-router-dom'

function UseLocationHook() {
    let location = useLocation()
    console.log(location.state)
    let name = location.state

  return (
    <div>
      {location.state}
      <br />
      {name}
    </div>
  )
}

export default UseLocationHook
