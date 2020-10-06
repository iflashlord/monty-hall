import React from 'react';
import man from './assets/man.svg';
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

        <div className="App-man">
          <Result />
          <img src={man} alt="Conductor" />
        </div>

      </header>

       
    </div>
  );
}

export default App;
