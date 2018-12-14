import React, {Component} from 'react';

const HOC = (Inner) => class extends Component {
  state = {counter: 0};

  increaseCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };

  render() {
    return(
      <Inner
        {...this.state}
        {...this.props}
        increaseCounter = {this.increaseCounter}
      />
    );
  }
};

export default HOC;