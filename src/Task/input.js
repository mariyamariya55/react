import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Input() {

    const[indata,setIndata]=useState('')

    const handleInputChange=(e)=>{

setIndata(e.target.value)
    }
   async function handleSubmit(){
        const { value: email } = await Swal.fire({
            title: "Input email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address"
          });
          if (email) {
            setIndata(email)
            Swal.fire(`Entered email: ${email}`);
          }
       


      

    }
 return (
    <div>
        <h3>Input Type</h3>
        <input type='text' value={indata} onChange={handleInputChange} placeholder='typing some'/>
      <button onClick={handleSubmit}>submit</button>
      {indata}
    </div>
  )
}

export default Input
