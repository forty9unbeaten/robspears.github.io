import React from "react";
import { Navbar } from ".";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h1>Robert Spears</h1>
      <BrowserRouter>
        <Navbar />
        <div id="App-container"></div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
