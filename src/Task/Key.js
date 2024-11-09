import React, { useState } from 'react'

function Key() {

  const[visible,setVisible]=useState(false)

function handleKeys(e){
console.log(e.key);
}


  return (
    <div onMouseEnter={()=>setVisible(true)}
    onMouseLeave={()=>setVisible(false)}>
      <input type='text' onKeyDown={handleKeys}/>
      <div ></div>
        {visible && <div>enter here</div>}
    </div>
    
  )
}

export default Key
