import React, { useState } from 'react';
 
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSignup = () => {
    if (username && password) {
      localStorage.setItem(username, password); 
      alert('Signup successful!');
      setUsername(''); 
      setPassword('');
    } else {
      alert('Please enter a username and password.'); 
    }
  };
 
  return (
<div>
<h2>Signup</h2>
<input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
<input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<button onClick={handleSignup}>Signup</button>
</div>
  );
};
 
export default Signup;