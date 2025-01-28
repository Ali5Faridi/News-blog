import React from 'react'
import { useState } from 'react';

function RegisterPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  async function register(ev){
    ev.preventDefault();

    const response = await fetch('http://localhost:8000/register',{
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    if(response.status === 200){
      alert('Register success');
  } else {
    alert('Register failed');
  }
  }
  
  return (
    <div>
      <form className='register' onSubmit={register}>
        <h1>Register</h1>
            <input type="text" placeholder='username' value={username}
             onChange={ev =>setUsername(ev.target.value)}/>

            <input type="password" placeholder='password' value={password}
            onChange={ev =>setPassword(ev.target.value)} />
            <button>Register</button> 
        </form>
    </div>
  )
}
 

export default RegisterPage