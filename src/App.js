import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
import './App.css';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      {/* // <Router>
      // <div>
      // <Route exact path="/portfolio" component={Portfolio} />
      // </div>
      // </Router> */}
      </div>
  );
}

export default App;
