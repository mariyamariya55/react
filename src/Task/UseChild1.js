import React, { useContext } from 'react';
import { MyData } from './Usetask';

function Usechild1() {
  const { result, handleRemove } = useContext(MyData);

  return (
    <div>
      <h3>Child Component</h3>
      {result && result.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>
          <button onClick={() => handleRemove(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Usechild1;