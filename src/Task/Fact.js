import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'




function Fact() {


    const [number, setNumber] = useState(0);
    const [result, setResult] = useState();

    const calculateFactorial = (num) => {
        if (num < 0) return false
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    };

    const total = (e) => {
        const value = parseInt(e.target.value);
        setNumber(value);
        setResult(calculateFactorial(value));
    }


    return (
        <div>
            <h1> factorial</h1>
            {result}
            <input type='text' onChange={total} />
            {/* <button onClick={total}> submit</button>
            {result} */}
        </div>
    )
}

export default Fact

