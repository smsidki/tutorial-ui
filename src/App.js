import React from 'react';
import './App.css';
import InputX from "./InputX";

class App extends React.Component {

  state = {
    x: '',
    y: ''
  };

  displayInputValues = () => {
    this.setState({
      x: this.x.refs.insideInputX.value,
      y: this.refs.y.value
    });
  };

  render() {
    const {x, y} = this.state;
    return (
      <div className="App">
        <InputX ref={component => this.x = component} onChange={this.displayInputValues}/>
        <hr/>
        <p>Input y:</p>
        <input ref={'y'} onChange={this.displayInputValues}/>
        <hr/>
        <h3>{`Value of state x = ${x}`}</h3>
        <h3>{`Value of state y = ${y}`}</h3>
      </div>
    );
  }

}

export default App;
