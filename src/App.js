import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Python from "./components/Python";
import JavaScript from "./components/JavaScript";
import Java from "./components/Java";

function App() {

  





  return (
    
    <Router>
    
      <NavBar />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/python" element={ <Python />} />
          <Route path="/javascript" element={ <JavaScript />} />
          <Route path="/java" element={ <Java />} />
          <Route path="*" element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
