import React from 'react'
import Swal from 'sweetalert2';

function Dial() {

    function handleAlert(){

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
  return (
    <div>
      <button onClick={handleAlert}> submit</button>
    </div>
  )
}

export default Dial

// <button onClick={handleAlert}>alert</button>
// <button onClick={() =>alert("clicked")}>alert</button>
// <button onClick={() => {window.confirm("do you ant to save?")}}>confirm</button>
// <button onClick={() => {prompt("enter something...")}}>prompt</button>
// <button onClick={() => {window.print()}}>print</button>
