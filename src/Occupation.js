import React from 'react';
import PropTypes from 'prop-types';

const Occupation = ({industry}) => <p>{'I work in ' + industry}</p>;

Occupation.propTypes = {
  industry: PropTypes.string.isRequired
};

export default Occupation;