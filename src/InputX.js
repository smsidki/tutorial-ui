import React from 'react';

class InputX extends React.Component {
  render() {
    return <input onChange={this.props.onChange}/>;
  }
}

export default InputX;