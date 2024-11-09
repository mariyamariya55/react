import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    // to manage the side effets of a component
    const [num,setNum] = useState()
    const [input, setInput] = useState(false)
    useEffect(() => {
        console.log("use effect")
        console.log(input)

    },[input])
    //empty array - useeffect will execute at initial rendering only
    // without [] - useeffect will execute at every rendering
    // [state] - useeffect will execute whenever the state value gets changed.  
   
  return (
    <div>
      <input type='text' onChange={(e)=>setNum(e.target.value)} />
      <button type='submit' onClick={() => {setInput(! input)}}>click</button>
    </div>
  )
}

export default UseEffectHook
