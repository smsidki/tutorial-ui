import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Profile from "./Profile";

class App extends React.Component {

  state = {
    hobby: 'do nothing'
  };

  changeHobby = () => {
    const {hobby} = this.state;
    this.setState({
      hobby: hobby === 'do nothing' ? 'run away from reality' : 'do nothing'
    });

    // empty object passed in setState parameter also cause re-render
    // this.setState({});
  };

  render() {
    console.log('rendered App.js');
    return (
      <div className="App">
        <Profile name={'Sidki'} greeting={'Hello World!'} hobby={this.state.hobby} />
        <button onClick={this.changeHobby}>Change hobby</button>
      </div>
    );
  }

}

export default App;
