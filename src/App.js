import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
      </Routes>
    </Router>
  );
}

export default App;
