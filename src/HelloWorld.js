import React, { Component } from 'react';
import './HelloWorld.css';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello '};
  }

  frenchify = () => {
    this.setState({ greeting: 'Bonjour '});
  }

  render() {
    return (
      <div className="hello-world">
        {this.state.greeting} {this.props.name}!
        <br/>
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    );
  }
};
