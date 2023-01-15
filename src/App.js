import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Python from "./components/Python";
import JavaScript from "./components/JavaScript";
import Java from "./components/Java";
import backgroundImage from "./images/background.jpg";



function App() {

  

  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  }



  return (
    
    <Router>
      <div style={imageStyle}>
      <NavBar />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/python" element={ <Python />} />
          <Route path="/javascript" element={ <JavaScript />} />
          <Route path="/java" element={ <Java />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
