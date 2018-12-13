import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = ({greeting}) => {
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
