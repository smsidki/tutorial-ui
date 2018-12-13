import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = ({greeting, profession}) => {
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <p>{'I am a/an ' + profession}</p>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

App.defaultProps = {
  profession: 'alien'
};

export default App;
