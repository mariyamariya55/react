import React, { useState } from 'react'

function Errohandlre() {

    const [number, setNumber] = useState('')
    const [num, setNum] = useState('')
   
    const [result, setResult] = useState()
    const [error, setError] = useState()

    const handleChange = () => {
        try {
        
            if (num == 0) {
                throw new Error('Enter a valid number')
            } else {
                const answer = number / num
                setResult(answer)
                setError()
    
            }
          
        } catch (e) {
            setError(e.message)
            setResult()
        }

    }

    return (
        <div>
            <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)} />
            <input type='text'value={num}  onChange={(e)=>setNum(e.target.value)} />
            <button onClick={handleChange}>Click</button>
           <p>{result}</p> 

           <p> {error}</p>

        </div>
    )
}

export default Errohandlre
