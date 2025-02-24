import './App.css';
import React from 'react';
import Login from './login/Login';
import Signup from './login/signup';
 
const App = () => {
  return (
      <div> 
        <Login />
        <Signup />
      </div>
  );
};
 
export default App;