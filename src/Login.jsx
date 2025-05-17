import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Btntext, setBtnText] = useState('Login');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login (replace with API call in real app)
    if (username === 'admin' && password === '1234') {
      onLogin();
    } else {

      // alert('Invalid credentials');
      setBtnText('Invalid credentials');
      setTimeout(() => setBtnText('Login'), 2000);
    }
  };

  return (
<div className='flex items-center justify-center h-screen w-screen bg-linear-to-r from-cyan-500 to-blue-500'>
    <div className='w-[400px] border-0 bg-blue-100 p-2 flex flex-col text-center rounded-2xl'>
    <h1 className='text-2xl font-bold text-center'>O.S Trader</h1>
      <h2 className='py-4'>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='w-full mb-2 p-2 border-2 border-gray-300 rounded-md'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='w-full mb-2 p-2 border-2 border-gray-300 rounded-md'
        />
        <button type="submit" style={{ width: '100%' } } className={Btntext === 'Invalid credentials' ? 'bg-red-600 disabled:opacity-75': 'bg-gray-200 border-2 border-black'}>{Btntext}</button>
      </form>
    </div>
</div>
  );
};

export default Login;
