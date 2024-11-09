import React, { useState } from 'react'

function Generate() {
    const[number,setNumber]=useState()

    const Multiplication=(e)=>{
setNumber(e.target.value)

    }
    const chenge=()=>{

let table=[]
for( let i=0;i<=10;i++){

    table.push(
        <tr key={i}>
            <td>{number}</td>
            <td>x</td>
<td>{i}</td>
<td>=</td>
<td>{number * i}</td>

        </tr>
    )
}
return table
   }
return (
    <div>
      <h5> Generate A Multiplicarion Table</h5>
      <input type='text' value={number} onChange={Multiplication} />
      <table>
      <tbody>{chenge()}</tbody>

      </table>
    </div>
  )
}

export default Generate
