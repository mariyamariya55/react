import React, { useState } from 'react'

function Ipadress() {
const[url,setUrl]=useState('')
const[data,setData]=useState('')

const extractdata=(input)=>{
    const regex=/(https?:\/\/[^\s]+)/g;
    const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/g;

    const foundurl=input.match(regex)
    const founddate=input.match(dateRegex)
    console.log(foundurl)
if(foundurl){
    setUrl(foundurl[0])
}if(founddate){
    setData(founddate)
}
}

  return (
    <div>
      <h3>Ipaddresss</h3>
      <input type='text' placeholder='Enter text eith url and date' onBlur={(e)=>extractdata(e.target.value)}/>
      <p>Extracted Url:{url}</p>
      <p>Entracted Date:{data}</p>
    </div>
  )
}

export default Ipadress
