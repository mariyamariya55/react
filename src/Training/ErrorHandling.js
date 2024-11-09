import React from 'react'

function ErrorHandling() {
    let a=89
    let b=8
    let c
            try{
                if(b==0){
                    throw new Error(" you cant divide by zero")
                }
                else{
            c =a/b }
        }catch(error){
            console.log(error.message)
        }
  return (
    <div>
      {c}
    </div>
  )
}

export default ErrorHandling
