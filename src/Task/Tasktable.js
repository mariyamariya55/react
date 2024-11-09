import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

function Datatable() {
    const[data,setData]=useState([])

    useEffect(()=>{
axios.get("https://fakestoreapi.in/api/products")
.then(res=>setData(res.data.products))


    },[])
    const columns=[

        {
            name:'id',
            selector:(row)=>row.id

        },
        {
            name:'color',
            selector:(row)=>row.color
        },
        {
        name:'category',
        selector:(row)=>row.category
        },
        {
            name:'brand',
            selector:(row)=>row.brand
        }

    ]

    
  return (
    <div>
      
      <DataTable
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      selectableRows
      paginationPerPage={5}
      />
    </div>
  )
}

export default Datatable
