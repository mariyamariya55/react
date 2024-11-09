
import React, { useState } from 'react'
import { useHistory, useNavigate } from 'react-router-dom';
import './Logian.css'
import { Card } from 'react-bootstrap';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate()
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      if (!email || !password) {
        setError('Email and Password are required');
        return;
      }
  
      console.log('Logging in with:', { email, password });
  
      setEmail('');
      setPassword('');
      setError('');
      navigate('/api')
      
    };
  
    return (
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
        
       
        <h1>Login</h1>
        <Card >
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        </Card>
      </div>
  )
}

export default LoginPage
