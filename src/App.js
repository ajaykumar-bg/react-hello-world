import React from 'react';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <h1> Hello world </h1> */}
      <Greet name="Peter Dinklage" heroName ="Tyrion"></Greet>
      <Welcome name="Peter Dinklage" heroName ="Tyrion"></Welcome>
      {/* 
      <Hello></Hello>
      <Message></Message>
      <Counter></Counter> */}
    </div>
  );
}

export default App;
