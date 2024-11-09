import React, { useState } from 'react'

function FormExample() {
    const [details, setDetails] = useState({
        username:"",
        password:"",
        email:""
    })

    const [selectedValue, setSelectedValue] = useState()
    const [radioValue, setRadioValue] = useState()
    const [isChecked, setIsChecked] = useState(false)

    function handleChange(e){
        setDetails({...details,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
    console.log(details, selectedValue, radioValue, isChecked)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label for="uname">username: </label>
            <input type='text' name='username' id='uname' value={details.username} onChange={handleChange}/>
            <br />
            <br />
            <label for="pwd">password: </label>
            <input type='text' name='password' id='pwd' value={details.password} onChange={handleChange}/>
            <br />
            <br />
            <label for="email">email: </label>
            <input type='text' name='email' id='email' value={details.email} onChange={handleChange}/>
            <br />
            <br />
            <label>select language</label>
            <select onChange={(e) => setSelectedValue(e.target.value)}>
                <option value="1">tamil</option>
                <option value="2">English</option>
                <option value="3">hindi</option>
            </select>
            <br />
            <br />
            <label>gender</label>
            <input type="radio" name='gender' id='male' value="male" onChange={(e) => setRadioValue(e.target.value)} />
            <label for="male">male</label>
            <input type="radio" name='gender' id='female'value="female" onChange={(e) => setRadioValue(e.target.value)} />
            <label for="female">female</label>
            <input type="radio"  name='gender' id='others' value="others" onChange={(e) => setRadioValue(e.target.value)}/>
            <label for="others" >others</label>
            <br />
            <br />
  <input type='checkbox' id='agree' value={isChecked} checked={isChecked} onChange={() => {setIsChecked(! isChecked)}} />
       <label for="agree">agree with us</label>
            <br />
            <br />
            <button type="submit" >submit</button>

        </form>
      
    </div>
  )
}

export default FormExample
