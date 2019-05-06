import React from 'react';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <h1> Hello world </h1> */}
      <Greet name="Alen">
      <p>This is children props</p>
      </Greet>
      <Greet name="Bruce">
      <button>Click</button>
      </Greet>
      <Greet name="Alice">
      </Greet>
      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
