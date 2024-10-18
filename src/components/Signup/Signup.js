// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import  auth  from '../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user)
      navigate('/'); // Redirect after successful signup
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className='login-container'>
    <div className='small-container'>
      <h2>Signup</h2>
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
        <button type="submit">Signup</button>
        <p>Click here to  <a href="/login">login</a></p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
