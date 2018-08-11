import React, { Component } from 'react';
import './hello.css';

const Hello = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{props.greeting}</p>
    </div>
  );
}

export default Hello;