import React from 'react'
import { Link } from 'react-router-dom';

function Rouc() {

    function handleButton(){
console.log('click the button');

    }
    

  return (
    <div>
      <h2> Router</h2>
      {/* <Link to='/Grand' >
      <button>form</button>
</Link> */}
<a href='/Math'> Answer</a>
<button onClick={handleButton}>Submit</button>
    </div>
  )
}

export default Rouc
