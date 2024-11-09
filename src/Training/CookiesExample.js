import React from 'react'
import Cookies from "js-cookie"


function CookiesExample() {

    localStorage.setItem("name","Mariya")
    localStorage.setItem("age",20)
    sessionStorage.setItem("name","Mariya")

    function acceptCookie(){
        Cookies.set("name","Mariya",{expires:5})
        
    }

  return (
    <div>
      {localStorage.getItem("name")}
      <button onClick={() => {localStorage.removeItem("name")}}>remove</button>
      <button onClick={() => {localStorage.clear()}}>clear</button>
      <button onClick={acceptCookie}>accept cookie</button>
      {Cookies.get("name")}
    </div>
  )
}

export default CookiesExample
