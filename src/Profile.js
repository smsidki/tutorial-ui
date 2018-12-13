import React from 'react';
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <>
      <h1>{props.greeting}</h1>
      <p>{'I am ' + props.name + ', a/an ' + props.profession}</p>
      <p>{'I like to ' + props.hobby}</p>
      <button onClick={props.onChangeHobby}>Change hobby</button>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  hobby: PropTypes.string.isRequired,
  onChangeHobby: PropTypes.func.isRequired
};

Profile.defaultProps = {
  profession: 'alien'
};

export default Profile;