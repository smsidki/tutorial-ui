import React from 'react';
import './App.css';

const App = ({greeting}) => {
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
};

export default App;
