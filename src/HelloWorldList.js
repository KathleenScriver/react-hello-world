import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

export default class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: [
        'Kat',
        'Anthony',
        'Eli'
      ]
    };
  }

  addGreeting = (newName) => {
    this.setState({ greetings: [...this.state.greetings, newName] })
  }

  removeGreeting = (removeName) => {
    const filteredNames = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    this.setState({ greetings: filteredNames });
  }

  renderGreetings = () => {
    return this.state.greetings.map(name => (
      <HelloWorld
        key={name}
        name={name}
        removeGreeting={this.removeGreeting}
      />
    ));
  }

  render() {
    return (
      <div className="hello-world-list">
        <AddGreeter addGreeting={this.addGreeting}/>
        {this.renderGreetings()}
      </div>
    );
  }
}
