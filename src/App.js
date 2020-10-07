import React from 'react';
import { Simulator } from './features/simulator/Simulator';
import { Result } from './features/result/Result';
import { Gates } from './features/gates/Gates';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1 className="App-title">Let’s Make a Deal
        <br />Simulator!</h1>
        
        <Gates />
        
        <Simulator />

        <Result />

      </header>
       
    </div>
  );
}

export default App;
