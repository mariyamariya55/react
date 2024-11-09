import React, { useReducer, useState } from 'react';


function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { items: [...state.items, action.item] }; 
    case 'remove':
      
      return { items: state.items.filter((_, i) => i !== action.index) };
    default:
      return state;
  }
}


function Usereducetask() {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const[value,setValue]=useState('')

  return (
    <div>
      <input type='text' onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={() => dispatch({ type: 'add', item: value })}>Add Item</button>
      {state.items.length > 0 && (
        <ul>
          {state.items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => dispatch({ type: 'remove', index })}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Usereducetask;