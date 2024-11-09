import React, { useState } from 'react'

function Array() {

    const[array,SetArray]=useState('')
    const [inputvalue,setInputValue]=useState([])

    const handleInputChange=(e)=>{

        SetArray(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newArray=array.split(',').map(item=>item.trim()).filter(item=>item!=='')

        const uniqueArray = [...new Set(newArray)];

        SetArray(uniqueArray);
    setInputValue('');
    }
  return (
<div>
    <form onSubmit={handleSubmit}>
    <input type='text' value={array} onChange={handleInputChange} placeholder='enter a numbar'/>
      <button type='submit'>submit</button>
      </form>
    </div>
  )
    }

export default Array
