import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import ReduceCounter from './ReducerCounter';
// import ClassRef from './ClassRef';
// import RefHook from './ClassRefHook';
// import Context from "./ContextApiHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReduceCounter />
      </header>
    </div>
  );
}

export default App;
