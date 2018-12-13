import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    hobby: 'do nothing'
  };

  changeHobby = () => {
    this.state.hobby = this.state.hobby === 'do nothing' ? 'run away from reality' : 'do nothing';
    console.log(this.state.hobby);
  };

  render() {
    console.log('rendered App.js');
    const {hobby} = this.state;
    const {greeting, profession, name} = this.props;
    return (
      <div className="App">
        <h1>{greeting}</h1>
        <p>{'I am ' + name + ', a/an ' + profession}</p>
        <p>{'I like to ' + hobby}</p>
        <button onClick={this.changeHobby}>Change hobby</button>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};

App.defaultProps = {
  profession: 'alien'
};

export default App;
