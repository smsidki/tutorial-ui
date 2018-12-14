import React from 'react';
import './App.css';
import ManualCounter from './ManualCounter';
import TimedCounter from './TimedCounter';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ManualCounter title={'Manual Counter'}>Click to increase number</ManualCounter>
        <hr/>
        <TimedCounter/>
      </div>
    );
  }

}

export default App;
