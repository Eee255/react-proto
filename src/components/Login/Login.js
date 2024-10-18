// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import  auth  from '../firebase';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect after successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError(error.message)
    }
  };

  return (
    <div className='login-container'>
      <div className='small-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='form-container'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <p>{error}</p>
        <p>Click here to  <a href="/signup">signup</a></p>

      </form>
      </div>
    </div>
  );
};

export default Login;
