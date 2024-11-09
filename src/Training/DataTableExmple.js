import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

function DataTableExmple() {
    const [details, setDetails] = useState([])
    useEffect(() => {

        axios.get("https://fakestoreapi.in/api/products")
        .then(res => setDetails(res.data.products))
    },[])

    const columns = [
        {name:"ID",
         selector: (row) => row.id   
        },
        {
            name:"Product Name",
            selector: row => row.brand
        },
        {
            name:"price",
            selector: row => row.price
        },
        {
            name:"color",
            selector: row => row.color
        }
    ]
  return (
    <div>
        <DataTable 
        columns={columns}
        data = {details}
        pagination
        highlightOnHover
        selectableRows
        selectableRowsHighlight
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5,10,15]}
        />
      
    </div>
  )
}

export default DataTableExmple
