import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Mature extends Component {
  state = {content: ''};

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.age >= 17) {
      this.setState({content: 'Contents that suitable for those aged 17 years and older'});
    } else {
      this.setState({content: 'You need at least 17 years old to view this content'});
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.content !== nextState.content;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate, previous age: ${prevProps.age}`);
  }

  render() {
    console.log('render Mature.js');
    return(
      <>
        <h3>{this.state.content}</h3>
      </>
    );
  }

}

Mature.propTypes = {
  age: PropTypes.number.isRequired
};

export default Mature;