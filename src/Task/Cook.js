import React from 'react'
import Cookies from 'js-cookie'

function Cook() {

    localStorage.setItem("name","yashmi")
    localStorage.setItem("city","thenkasi")
    localStorage.setItem("age",20)
    sessionStorage.setItem('name','roselien')

    function acceptcookie(){
        Cookies.set("name","kerthi",{expires:4})
    }

  return (
    <div>
      {localStorage.getItem('name')}<br></br>
      {localStorage.getItem('city')}<br></br>
      {localStorage.getItem('age')}<br></br>
      <button onClick={()=>localStorage.removeItem('age')}>Remove</button>
      <button onClick={()=>localStorage.clear()}>clear</button>
      {sessionStorage.getItem('name')}
      <button onClick={()=>sessionStorage.clear()}>clear</button>
      <button onClick={()=>sessionStorage.removeItem('name')}>remove</button>
      <button onClick={acceptcookie}>Agree cookies</button>
{Cookies.get("name")}

    </div>
  )
}

export default Cook
