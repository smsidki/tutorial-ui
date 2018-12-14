import React from 'react';
import HOC from "./HOC";

const ManualCounter = (props) => {
  return(
    <>
      <h1>{props.title}</h1>
      <button onClick={props.increaseCounter}>{props.children}</button>
      <br/>
      <h3>{props.counter}</h3>
    </>
  );
};

export default HOC(ManualCounter);