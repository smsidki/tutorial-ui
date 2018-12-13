import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    x: '',
    y: ''
  };

  displayInputValues = (e) => {
    this.setState({
      x: e.target.value,
      y: e.target.value
    });
  };

  render() {
    const {x, y} = this.state;
    return (
      <div className="App">
        <p>Input x:</p>
        <input onChange={this.displayInputValues}/>
        <hr/>
        <p>Input y:</p>
        <input onChange={this.displayInputValues}/>
        <hr/>
        <h3>{`Value of state x = ${x}`}</h3>
        <h3>{`Value of state y = ${y}`}</h3>
      </div>
    );
  }

}

export default App;
