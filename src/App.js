import React from 'react';
import './App.css';
import Counter from './Counter';
import ReactDOM from 'react-dom'

class App extends React.Component {

  mountCounter = () => {
    ReactDOM.render(<Counter/>, document.getElementById('counter'))
  };

  unmountCounter = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('counter'))
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.mountCounter}>Mount counter</button>
        <br/>
        <button onClick={this.unmountCounter}>Unmount counter</button>
        <hr/>
        <div id={'counter'}/>
      </div>
    );
  }

}

export default App;
