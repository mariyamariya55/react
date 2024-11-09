import React from 'react'
import Swal from 'sweetalert2';

function DialogueBoxes() {
    function handleAlert(){
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // code for save
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }
  return (
    <div>
        <button onClick={handleAlert}>alert</button>
        <button onClick={() =>alert("clicked")}>alert</button>
        <button onClick={() => {window.confirm("do you ant to save?")}}>confirm</button>
        <button onClick={() => {prompt("enter something...")}}>prompt</button>
        <button onClick={() => {window.print()}}>print</button>
      
    </div>
  )
}

export default DialogueBoxes
