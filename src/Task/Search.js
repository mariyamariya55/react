import React from 'react'

function Search() {
function handleMouseEnter(e){

    console.log("MouseEntered" +e.clientX+" " + e.clientY);
    }
    function handleMouseLeave(){
        console.log("Mouseleave");
        
    }

  return (
    <div
    style={{width:"100vw",height:'100vh',color:'blue',paddingBottom:30}}
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      React is a JavaScript library that allows users to create user interfaces for web and native platforms. It was designed and maintained by Facebook and first released in 2013.
      Declarative: React allows users to create interactive UIs by designing simple views for each state in their application. React will then compare the new state with the last-known state and apply the smallest changes possible to the page. This process is often called declarative programming, and allows developers to describe how they want the application to render without worrying about what happens when the data changes. 
      n theater and movies: An object used by actors on stage or in a film during a performance or production. Props are usually movable or portable, and are distinct from the actors, scenery, costumes, and electrical equipment. For example, a table,
      As a support: Something used as a support, like a broom used to hold a door open. 
      In React.js: Props are customized and defined in React, and are different from HTML attributes, which are special keywords that are already provided. For example, in React.js, you can create properties like "img", "name", "desc", and "price", and then attach the values of the props alongside them. 
<br></br>

      <button>Click</button>
    </div>
  )
}

export default Search
