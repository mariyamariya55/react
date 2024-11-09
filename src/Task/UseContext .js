import React, { createContext } from 'react'

import ContextChild1 from './ContextChild1'

export const cityContext=createContext()

function UseContext () {
  
    let comp='yasmin'
    let city='thenkasi'
        
  return (
    <cityContext.Provider value={[comp,city]}>
    <div>
  
      <h2>Parent Component</h2>
    <ContextChild1/>
    </div>
    </cityContext.Provider>
  )
}

export default UseContext 
