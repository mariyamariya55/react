import React from 'react'
import { useNavigate } from 'react-router-dom'

function UseNavigateHook() {
    let nav = useNavigate()
    let username = "mariya"
    function handleNvigation(){
        nav('/uselocationhook',{state:username})
    }
  return (
    <div>
      <button onClick={handleNvigation}>go to loction</button>
    </div>
  )
}

export default UseNavigateHook
