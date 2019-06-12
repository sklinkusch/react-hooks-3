import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import ClassRef from './ClassRef';
// import Context from "./ContextApiHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassRef />
      </header>
    </div>
  );
}

export default App;
