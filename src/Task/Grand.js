import React, { useState } from 'react'

function Grand() {

    const [age, setAge] = useState()
    const[result,setResult]=useState()

    const calculate = () => {
        if (age>=90) {

            setResult('grade is A')

        } else if (age > 80 && age <= 90) {
          setResult('grade is b')

        } else if (age > 70 &&age < 80) {
            setResult('grade is c')

        } else if (age > 60 && age < 70) {
            setResult('grade is d')
        } else {
            setResult('grade is 0')
        }
    }

    return (
        <div>

            <h1> Grade calculate</h1>
            <input type='number' onChange={(event) => { setAge(event.target.value) }} />
            <button onClick={calculate}> grade</button>
           
            {result}
        </div>
    )
}

export default Grand
