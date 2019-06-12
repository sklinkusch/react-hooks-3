import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Context from "./ContextApi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Context />
      </header>
    </div>
  );
}

export default App;
