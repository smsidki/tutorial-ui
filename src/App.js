import React from 'react';
import './App.css';
import Mature from "./Mature";

class App extends React.Component {

  state = {age: 0};

  verifyAge = () => {
    this.setState({age: Number(this.refs.age.value) || 0});
  };

  render() {
    return (
      <div className="App">
        <Mature age={this.state.age}/>
        I am <input ref={'age'}/> years old.
        <br/>
        <br/>
        <button onClick={this.verifyAge}>Verify</button>
      </div>
    );
  }

}

export default App;
