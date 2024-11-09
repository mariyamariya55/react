import React, { createContext, useState } from 'react';
import Usechild1 from './UseChild1';

export const MyData = createContext();

function Usetask() {
  const [data, setData] = useState('');
  const [result, setResult] = useState([]);

  const total = (e) => {
    setData(e.target.value);
  };

  const handleAdd = () => {
    setResult([...result, data]);
  };

  const handleRemove = (index) => {
    setResult(result.filter((_, i) => i !== index));
  };

  return (
    <MyData.Provider value={{ result, setResult, handleRemove }}>
      <div>
        <input type='text' onChange={total} />
        <button onClick={handleAdd}>Add</button>
        <h1>Parent Component</h1>
        <Usechild1 />
      </div>
    </MyData.Provider>
  );
}

export default Usetask;