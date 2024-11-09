import React from 'react'

function MouseEvents() {

    function handleMouseEnter(e){
        console.log("Mouse entered" + e.clientX + " " + e.clientY)
    }

    function handleMouseLeave(){
        console.log("Mouse left")
    }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        HTML is the standard markup language for Web pages.

With HTML you can create your own Website.

HTML is easy to learn - You will enjoy it!

<button>clickk</button>


      
    </div>
  )
}

export default MouseEvents

// background color changing using mouse events
// showing tooltip

