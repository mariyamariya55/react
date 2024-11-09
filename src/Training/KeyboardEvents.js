import React from 'react'

function KeyboardEvents() {
    
    function handleKeys(e){
        console.log(e.key)
    }
  return (
    <div>
      <input type='text' onKeyDown={handleKeys} />
    </div>
  )
}

export default KeyboardEvents
