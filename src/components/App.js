import React from "react";
import "../styles/app.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={Properties()} />
      <Route path="/add-property" element={AddProperty()} />
    </Routes>
  </div>
);

export default App;
