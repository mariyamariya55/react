import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Form() {

    const[data,setData]=useState({name:'',email:'',gender:'',username:',',password:''})

    const[radio,setRadio]=useState('')
    let nav = useNavigate()


function handleChange(e){

    setData({...data,[e.target.name]:e.target.value})
        
}
function handleSubmit(e){
e.preventDefault()
Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
      // code for save
      nav('/Home',{state:data})
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});




    
        
      

}

  return (
  <div>
    
<form onSubmit={handleSubmit}>
    <label for="nu">Name:</label>
    <input type='text' name='name' id='nu' value={data.name} onChange={handleChange}/>
    <br></br><br></br>
    <label for="em">email:</label>
<input type='text' name='email' id='em' value={data.email} onChange={handleChange}/><br></br><br></br>
<label for='male'>gender:</label>
<input type="radio" name='gender' id='male' value="male" onChange={(e)=>setRadio(e.target.value)} />
    <label for='female'>male</label>
    <input type='radio' name='gender' id='female' onChange={(e)=>(e.target.value)}/>
    <label for='others'>Female</label>
    <input type='radio' name='others' id='othe' onChange={(e)=>(e.target.value)}/>
    <label>Others</label><br></br><br></br>
    
    <label for="use">username:</label>
    <input type='text' name='Username' id='use' value={data.paw} onChange={handleChange}/><br></br><br></br>
    <label for="paw">password:</label>
    <input type='text' name='passord' id='paw' value={data.value} onChange={handleChange}/> <br></br><br></br>
      
      <button>Submit</button>
      </form>
      
    </div>
  )
}

export default Form
// function ReactRouter() {
//     let nav = useNavigate()
      
//       function handleButton(){
        
//           console.log("navigation")
//           nav('/grand')
  
// function UseNavigateHook() {
//     let nav = useNavigate()
//     let username = "mariya"
//     function handleNvigation(){
//         nav('/uselocationhook',{state:username})
//     }