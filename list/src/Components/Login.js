import React, { useState } from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError('Please enter both email and password');
        return;
      }
  
      console.log('Logging in with:', { email, password });
      
      setError('');
     
      navigate('/Newapi')
      
      
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          
          <button type="submit" className='b1'>Login</button>
        
        </form>
      </div>
    );
  };
export default Login
