import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

function NewApi() {
    const[details,setDetails]=useState('')
    const[data,setData]=useState({
        clientId: 0,
        clientName: '',
        phone: '',
        address: '',
        gst: '',
        website: '',
        email: '',
        contactPerson: '',
        phoneNumber: '',
        createdBy: 1
    }
       )
    useEffect(()=>{

        axios.get('http://catodotest.elevadosoftwares.com//Client/GetAllClientDetails')
        .then(res=>{setDetails(res.data.clientList)
            console.log(res.data.clientList);
            
    })
    },[])

    function handleChange(e){

        const{name,value}=e.target;
        setData(prevData=>({
            ...prevData,
            [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(data);
        axios.post('http://catodotest.elevadosoftwares.com/Client/InsertClient',data)
        alert('saved')
        
    }
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
        setData({
            clientId: row.clientId,
            clientName: row.clientName,
            phone: row.phone,
            address: row.address,
            gst: row.gst,
            website: row.website,
            email: row.email,
            contactPerson: row.contactPerson,
            phoneNumber: row.phoneNumber,
            removedOn: row.removedOn,
            removedRemarks: row.removedRemarks,
            createdBy: row.createdBy
        })
        
    }

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
        cell: row => <button onClick={() => handleDelete(row.clientId)}>Delete</button>
    },
    {
        name:'Actions',
        cell:row=><button onClick={()=>handleEdit(row)}>Edit</button>
    }
]

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
<br />
                <label  htmlFor='phoneno'>Phoneno</label>
                <input
                    type='text'
                
                    name='phone'
                    value={data.phone}
                    onChange={handleChange} 
                />
                <br />
                <label htmlFor='address'>Address</label>
                <input type='text' name='address' value={data.address} onChange={handleChange}/>
                <label>Gmail</label>
                <input type='text' name='email' value={data.email} onChange={handleChange}/>
                <label>website</label>
                <input type='text' name='website' value={data.website} onChange={handleChange}/>

                <button type='submit'>Submit</button>
            </form>
            <DataTable columns={columns} data={details} />
 
    </div>
  )
}

export default NewApi
