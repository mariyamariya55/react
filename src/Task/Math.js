import React ,{useState}from 'react';


const capitalizeWords = (text) => {
  return text
  .split(' ') 
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
  .join(' '); 
};

const Upper = () => {
  const [text, setText] = useState('');
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleCapitalize = () => {
    setText(capitalizeWords(text));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      <button onClick={handleCapitalize}>Capitalize Words</button>
      {/* <h1>{text}</h1> */}
    </div>
  );
};
export default Upper