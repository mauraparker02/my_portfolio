import React from 'react';
import Navbar from './components/Navbar'; 
import PortCard from './components/PortCard';
import Form from './components/Form'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <img src="./public/imgs/me.jpg" alt="not working" width="500" height="600"></img>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
      <h1>Portfolio</h1>
      <PortCard></PortCard>
      <PortCard></PortCard>
      <h1>Say Hi!</h1>
      <Form></Form>
      
      </div>
  );
}

export default App;
