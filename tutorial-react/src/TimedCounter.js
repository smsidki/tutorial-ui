import React from 'react';
import HOC from "./HOC";

class TimedCounter extends React.Component {
  componentDidMount() {
    this.timer = setInterval(this.props.increaseCounter, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return(
      <>
        <h1>{`Timer : ${this.props.counter}`}</h1>
      </>
    );
  }
}

export default HOC(TimedCounter);