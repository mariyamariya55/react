import React, { useState } from 'react'

function UseStateHook() {
    const [data, setData] = useState(5)
    const [num, setNum] = useState()
    const [result, setResult] = useState()
    console.log(data)
    function sum(){

        setResult(Number(data)+Number(num))
    }
    
  return (
    <div>
      <input type='text' onChange={(event) => {setData(event.target.value)}} />
      <input type='text' onChange={(event) => {setNum(event.target.value)}} />
      <button onClick={sum} >add</button>
      <h1>{result}</h1>
    </div>
  )
}

export default UseStateHook
