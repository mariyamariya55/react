import React, { useState } from 'react'

function Final() {

    const [num, setNum] = useState('')
    const [even, setEven] = useState([])
    const [sum, setSum] = useState(0)
    const [total, setTotal] = useState(0)

    const input = (e) => {

        setNum(e.target.value)
    }


    const caleven = () => {
        const arr = num.split(",").map(Number)
        const ddd = arr.filter(s => s % 2 == 0);
        const tt = ddd.reduce((acc, num) => acc + num +0)
        const aa = ddd.length?tt/ddd.length:0

        setEven(ddd)
        setSum(tt)
        setTotal(aa)

    }


    return (
        <div>
            <h3> Even cal</h3>
            <input type='text' value={num} onChange={input} placeholder='enter a number' />
            <button onClick={caleven}> calculate</button>
            <p> even numbers:{even.join()}</p>
            <p> sum of even:{sum}</p>
            <p> total:{total}</p>

        </div>
    )
}

export default Final
