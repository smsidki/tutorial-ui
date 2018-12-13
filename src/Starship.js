import React from 'react';

const Starship = ({name, manufacturer}) => {
  return(
    <p>{`${name} - ${manufacturer}`}</p>
  );
};

export default Starship;