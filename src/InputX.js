import React from 'react';

class InputX extends React.Component {
  render() {
    return (
      <>
        <p>Input x:</p>
        <input ref={'insideInputX'} onChange={this.props.onChange}/>
      </>
    );
  }
}

export default InputX;