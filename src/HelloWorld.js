import React, { Component } from 'react';
import './HelloWorld.css';

const HelloWorld = (props) => {
  return (
    <div className="hello-world">Hello {props.name}!</div>
  );
};

export default HelloWorld;
