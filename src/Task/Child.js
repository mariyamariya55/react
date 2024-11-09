import React from 'react'

function child({data,value,info}) {

    // let d=props.data
    // let e=props.value
    // let g=props.info
    // console.log(d);
    // console.log(e);
    // console.log(g);
    
    
    
  return (
    <div>
      <h3> Child Component</h3>
      <p> Data from parent:{data}</p>
      <p>{value}</p>
      <p>{info}</p>
    </div>
  )
}

export default child
