import React, { useState } from 'react'

function Login() {
    const[details,setDetails]=useState({
        name:'',
        lastName:'',
        password:'',
        Email:''
        
    })
    const[select,setSelect]=('')
    const[type,setType]=('')
    const[one,setOne]=('false')
    //     const[crt,setCrt]=('')

    function handleChange(e){
setDetails({...details,[e.target.name]:e.target.value})
}

function submit(e){

    e.preventDefault()
    alert("submited")
}
return (
    <div>
  <form onSubmit={submit}>

    <label for="mmm" > Name:</label>
    <input type='text' name='name' id='mmm' value={details.name} onChange={handleChange}/>
    <br></br><br></br>
    <label for="sss"> LastName:</label>
    <input type='text' name='lastName' id='sss' value={details.lastName} onChange={handleChange}/>
    <br></br><br></br>
    <label for="kkk"> Email:</label>
    <input type='text' name='Email' id='kkk' value={details.Email} onChange={handleChange}/>
    <br></br><br></br><label for ="abc"> password:</label>
    <input type='text' name='password' id='abc' value={details.password} onChange={handleChange}/>
    <br></br><br></br>
    {/* <label>confirm password:</label>
    <input type='number' name='ConfirmPassword ' id='ConfirmPassword' value={details.co}/> */}
    <label for='rrr'>Gender:</label>
    <input type='radio' name='gender' id='rrr' value='male' onchange={(e=>setType(e.target.value))} />
    <label for='xyz'>male</label>
    <input type='radio' name='gender' id='xyz' value='female' onChange={(e=>setType(e.target.value))}/>
    <label for='eee'>female</label>
    <input type="radio" name='gender' id='eee' value='others' onChange={(e=>(e.target.value))}/>
    <label>others</label>
    {/* <input type='radio'/> */}
    <br></br><br></br>

    
    <label>DOB:</label>
    <select onchange={(e)=>setSelect(e.target.value)}>
    <option>13</option>
    <option>oct</option>
    <option>1999</option>
    

    </select>
    
    <br></br><br></br>
    <hr></hr>
   
    <label for='agree'>I Have Already Account?</label><br></br><br></br>
    <input type='checkbox' id='agree' value={one} checked={one} onChange={()=>{setOne(!one)}}/>
    <button type='submit'> Login</button>

  </form>


    </div>
  )
}

export default Login
