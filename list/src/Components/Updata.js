import React,{ useEffect, useState } from "react"
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


function Updata() {

    const[data,setData]=useState({
        clientId: 0,
        clientName: '',
        phone: '',
        address: '',
     
        website: '',
        email: '',
      
        phoneNumber: '',
        createdBy: 1
    }
       )

       const navigate=useNavigate()
       const location=useLocation()
       console.log(location);
       let d = location.state
       useEffect(()=>{
        if(d){

        setData({
            
            clientId: d.clientId,
        clientName: d.clientName,
        phone: d.clientphone,
        address: d.address,
     
        website: d.website,
        email: d.email,
      
        phoneNumber: d.phoneNumber,
        createdBy: 1
        })}
       },[])

    function handleSubmit(e){
        e.preventDefault()
        console.log(data);
        axios.post('http://catodotest.elevadosoftwares.com/Client/InsertClient',data)
        alert('saved')
        navigate('/Newapi')

        
    }
    function handleChange(e){

        // const{name,value}=e.target;
        // setData(prevData=>({
        //     ...prevData,
        //     [name]:value
        // }))
        setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>



<label htmlFor='id'>Name</label>
              <input
                  type='text'
                
                  name='clientName'
                  value={data.clientName}
                  onChange={handleChange} 
              />
<br /><br></br>
              <label  htmlFor='phoneno'>Phoneno</label>
              <input
                  type='text'
              
                  name='phone'
                  value={data.phone}
                  onChange={handleChange} 
              />
             
              <label htmlFor='address'>Address</label>
              <input type='text' name='address' value={data.address} onChange={handleChange}/>
              <label>Gmail</label>
              <input type='text' name='email' value={data.email} onChange={handleChange}/>
              <label>website</label>
              <input type='text' name='website' value={data.website} onChange={handleChange}/>

              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default Updata
