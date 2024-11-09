import React, { useContext } from 'react'
import { userCntext } from './UseContextHook'

function UseContextChild2() {
    let {user, c, sample} = useContext(userCntext)
    sample()
  return (
    <div>
        <h1>child component 2</h1>
      {user}
      <div>{c}</div>
    </div>
  )
}

export default UseContextChild2
