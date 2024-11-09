import React from "react";

function Basic(){
    let a = 25
    a=90
    
    var b=9
    var b=56
    b=67
    let c= a+b
    let str ="hello... welcome"
    let arr = ["apple","orange"]
    let obj = {
        name : "react",
        course :"mern"
    }
    let boolValu = true

    console.log((10>5 || 20>34))

    function example()
{
    let x=10
    let y=67
    console.log(a+b)
    console.log(x+y)
}
example()
// console.log(x+y)


    return(
        <div>
           <h1>React basics</h1>
           <h2>value1 : {a+b}</h2>
           {c}
           {str}

           <br />
           {arr && arr.map(i => (
            <div>{i.toUpperCase()}</div>
           ))}

           {obj.course}
           <br />
           {obj.name}
           <br />

           {boolValu.toString()}
            <br />
            {a++}
            <br />
            {a}
            <br />
            {++b}
            {(a<b).toString()}

        </div>
        
         
    )
}

export default Basic

