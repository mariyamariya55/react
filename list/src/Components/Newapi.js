
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link, useNavigate } from 'react-router-dom'
import './newap.css'; 


function Newapi() {
  const[details,setDetails]=useState('')
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
  useEffect(()=>{

      axios.get('http://catodotest.elevadosoftwares.com//Client/GetAllClientDetails')
      .then(res=>{setDetails(res.data.clientList)
          console.log(res.data.clientList);
          
  })
  },[])

  


  function handleDelete(id){

      console.log(id);
      axios.post('http://catodotest.elevadosoftwares.com/Client/RemoveClient',
          {ClientId:id,removedRemarks:'null',createdBy:1}
      )
      .then(()=>{

          console.log(details);
          alert('deleted')
          
      })
      .catch(err => console.error(err));
  }

  function handleEdit(row){
      console.log(row);
    //   setData({
        //   clientId: row.clientId,
        //   clientName: row.clientName,
        //   phone: row.phone,
        //   address: row.address,
        //   gst: row.gst,
        //   website: row.website,
        //   email: row.email,
          
        //   phoneNumber: row.phoneNumber,
        //   removedOn: row.removedOn,
        //   removedRemarks: row.removedRemarks,
        //   createdBy: row.createdBy
    //   })
    navigate('/Updata', { state: row}); // Navigate and pass client data
      
  }
//   function handleOut(){
//     navigate('/Login')
//   }

const columns=[


  {
      name:'id',
      selector:(row)=>row.ClientId
  },

  {
      name:'phone',
      selector:(row)=>row.phone
  },
  {
      name:'address',
      selector:(row)=>row.address
  },
  {
      name:'gst',
      selector:(row)=>row.gst
  },
  {
      name:'Name',
      selector:(row)=>row.clientName
  },
  {
      name:'website',
      selector:(row)=>row.website
  },
  {
      name:'email',
      selector:(row)=>row.email
  },
  {
      name:'contactPerson',
      selector:(row)=>row.contactPerson
  },
  {
      name:'phoneNumber',
      selector:(row)=>row.phoneNumber
  },
 
 
  {
      name:'createdBy',
      selector:(row)=>row.createdBy
  },
  {
      name: 'Actions',
      cell: row => <button className='d1' onClick={() => handleDelete(row.clientId)}>Delete</button>
  },
  {
      name:'Actions',
      cell:row=><button className='d2' onClick={()=>handleEdit(row)}>Edit</button>
  }
]

return (
  <div>
    
    <Link to='/Updata'>
    <button className='v2' >Add Client </button>
    </Link>
   
          <DataTable columns={columns} data={details} />
          

  </div>
)
}

export default Newapi
