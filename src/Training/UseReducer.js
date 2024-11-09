import React, { useReducer } from 'react'


function reducer(state,action){
  //  console.log(action.payload);
    
    switch(action.type){
        case "inc":
          return  {count:state.count+1}
        case "dec":
            return {count:state.count-1}
        case "reset":
            return {count:0}
        

    }


}

function UseReducer() {
    const [state,dispatch]= useReducer(reducer,{count:0})
  return (
    <div>
        <button onClick={()=>{dispatch({type:"inc"})}}>+</button>

      {state.count}
      <button onClick={()=>{dispatch({type:"dec"})}}>-</button>
    </div>
  )
}

export default UseReducer
