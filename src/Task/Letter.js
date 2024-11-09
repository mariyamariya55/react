
import React, { useState } from 'react';


function WordCounter() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }
  const countWords = (str) => {

    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  return (
    <div>
        <h1> Find the value</h1>
      <input
        value={text}
        onChange={handleChange}
  
    
      />
      <p>Word Count: {countWords(text)}</p>
    </div>
  );
}

export default WordCounter
