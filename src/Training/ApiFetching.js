import React, { useEffect, useState } from 'react'

function ApiFetching() {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com//products/category/jewelery')
      .then(response => response.json())
      .then(json => {console.log(json)
        setDetails(json)
        
      })
    },[])

  return (
    <div>
        {details.map((item,index) => (
            <li>{item.title}
            {item.id}</li>
        ))}
      
    </div>
  )
}

export default ApiFetching
