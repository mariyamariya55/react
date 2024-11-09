import React, { useContext } from 'react'
import { cityContext } from './UseContext '



function UseChild3() {
let [a,b]=useContext(cityContext)
console.log(a);

  
  return (
    <div>
      <h2>Child Component2</h2>
      {a}
      {b}
    </div>
  )
}

export default UseChild3


// import React, { useContext } from 'react'
// import { userCntext } from './UseContextHook'

// function UseContextChild2() {
//     let {user, c, sample} = useContext(userCntext)
//     sample()
//   return (
//     <div>
//         <h1>child component 2</h1>
//       {user}
//       <div>{c}</div>
//     </div>
//   )
// }

// export default UseContextChild2
