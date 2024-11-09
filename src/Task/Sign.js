import React, { useState } from 'react'

function Sign() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        gender: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
  return (
    
    <form onSubmit={handleSubmit}>
    
        
      <h1> Sign UP from</h1>
     <div>
        
<label>
name:
<input type='text' name='name' value={formData.name} onChange={handleChange}/>
</label>
</div>
<div>
<label>
    <br></br>
    
username:
<input type='text' name='userName' value={formData.username}onChange={handleChange}/>
<br></br>

</label>
</div>
<div>
<label>gender:
<input type='radio' name='gender' value='male' checked={formData.gender==='male'} onChange={handleChange}/>Male
</label>
</div>

<div>
<label>
    <input type='radio' name='gender' value='female' checked={formData.gender==='female'} onChange={handleChange}/> Female
</label>
</div>

<div>
<label>
    <input type='radio' name='gender' value='others' checked={formData.gender==='others'} onChange={handleChange}/> others
</label>
</div>


<button type="submit">Submit</button>


</form>



  )
}

export default Sign
