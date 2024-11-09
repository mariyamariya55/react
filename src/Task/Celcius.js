import React,{useState} from "react";


function UseStateHook1(){

    const[Celcius,setCelcius] =useState('')
    const [fahrenheit, setFahrenheit] = useState(null);


    const convertToFahrenheit = (cel) => {
        return (cel*9/5) + 32;
      };

      const handleChange =(e)=>{
      const val=  e.target.value;
      setCelcius(val);
       
        if(val!==''){
            setFahrenheit(convertToFahrenheit(parseFloat(val)));
        }else{

            setFahrenheit()
        }
        };

return(

<div>
<h1>Celsius to Fahrenheit Converter</h1>
<input type=" number" value={Celcius} onChange={handleChange} ></input>


      {fahrenheit !==null &&(

<p>{Celcius}°C is equal to {fahrenheit.toFixed(2)}°F</p>
      )}

</div>


);

}


export default UseStateHook1