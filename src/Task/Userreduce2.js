import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
      case 'add':
      
        return { product: [...state.product, action.products] , totalPrice:state.totalPrice+action.products.price};
      case 'remove':
        let x= state.product[action.index].price
        return { product: state.product.filter((_, i) => i !== action.index),totalPrice:state.totalPrice-x};
      default:
        return state;
    }
  }
  
 
  const products = {
    product1: { name: 'Product 1', price: 10 },
    product2: { name: 'Product 2', price: 20 },
  };
 

function Userreduce2() {

    const[state,dispatch]=useReducer(reducer,{product:[],totalPrice:0})

     
  const handleAddProduct=(productkey)=>{
    dispatch({type:'add',products:productkey})

  }
    return(
    <div>
    
    <button onClick={() => handleAddProduct(products.product1)}>Add Product 1</button>
    <button onClick={() => handleAddProduct(products.product2)}>Add Product 2</button>
    
    {state.product.length > 0 && (
      <ul>
        {state.product.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
            <button onClick={() => dispatch({ type: 'remove', index })}>Remove</button>
          </li>
        ))}
      </ul>
    )}
    <h1>{state.totalPrice}</h1>
    <h3>{state.totalPrice}</h3>
    
  </div>
);
}

export default Userreduce2;