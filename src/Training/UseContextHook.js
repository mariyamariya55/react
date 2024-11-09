import React, { createContext } from 'react'
import UseContextChild from './UseContextChild'

 export const userCntext = createContext()

function UseContextHook() {

    let user = "mariya"
    let course = "react"
    function sample(){
        console.log("sample")
    }

  return (
    <userCntext.Provider value={{user,course,sample}}>
    <div>
        <h1>parent component</h1>
      <UseContextChild />
    </div>
    </userCntext.Provider>
  )
}

export default UseContextHook
