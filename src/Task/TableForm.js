import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Datatable from './Datatable';
import DataTable from 'react-data-table-component';

function TableForm() {
    
    const[details,setDetails]=useState([])
    const [data, setData] = useState({
        categoryId:0,
        category: '',
        description: '',
        createdBy:1
    });

    useEffect(() => {
        axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
        .then(res => setDetails(res.data.categoryList))
    })

   
    function handleChange(e) {
        const { id, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [id]: value
        }));
    }

 
    function handleSubmit(e) {
        e.preventDefault();
     
        console.log(data);
        axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory",data)
        alert("saved!..")
        setData({
            category:'',
            description:''
        })

    }

    function handleDelete(id) {
        console.log(id);
        
        axios.post(`http://catodotest.elevadosoftwares.com/Category/RemoveCategory`,
            {categoryId:id,removedRemarks:"test",createdBy:1})
          .then(() => {
           // setDetails(prevDetails => prevDetails.filter(detail => detail.categoryId !== id));
            console.log(details);
            
             alert("Deleted!");
            
             
          })
          .catch(err => console.error(err));
        }

        
        function handleEdit(row){
            console.log(row);
            
setData({
    categoryId:row.categoryId,
    category:row.category,
    description:row.description,
    createdBy:row.createdBy
})



            
        }

    const columns=[

        {
            name:'id',
            selector:(row)=>row.categoryId

        },
        {
            name:'color',
            selector:(row)=>row.category

        },
        {
        name:'category',
        selector:(row)=>row.description
        },
        {
            name:'brand',
            selector:(row)=>row.createdBy
        },
        {
            name: 'Actions',
            cell: row => <button onClick={() => handleDelete(row.categoryId)}>Delete</button>
        },
        {
            name:'Actions',
            cell:row=><button onClick={()=>handleEdit(row)}>Edit</button>
        }
    ]
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='id'>categoy</label>
                <input
                    type='text'
                    id='category' 
                    name='category'
                    value={data.category}
                    onChange={handleChange} 
                />
                <br />
                <label  htmlFor='description'>Description</label>
                <input
                    type='text'
                    id='description' 
                    name='description'
                    value={data.description}
                    onChange={handleChange} 
                />
                <br />
                <button type='submit'>Submit</button>
            </form>
            <DataTable columns={columns} data={details} />


            
        </div>
    );
}

export default TableForm