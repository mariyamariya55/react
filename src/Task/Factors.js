import React, { useState } from 'react'

function Factors() {
    const [number, setNumber] = useState()
    const [result, setResult] = useState()


    const input = (e) => {
        setNumber(e.target.value)

    }
    const calculatefact = () => {

        let arr = []
        for (let i = 0; i < number; i++) {
            if (number % i == 0) {
                arr.push(i)
                console.log(arr);
            }
        }
        // return arr
        setResult(arr)
    }
    return (
        <div>Factors
            <input type='text' value={number} onChange={input} />
            <button onClick={calculatefact}>click</button>
            {result && result.join(',')}

        </div>
    )
}

export default Factors
