import React, { Component } from 'react';
import './AddGreeter.css';

export default class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingName: ''
    };
  }

  handleUpdate = (event) => {
    this.setState({ greetingName: event.target.value })
  }

  handleClick = () => {
    this.props.addGreeting(this.state.greetingName);
    this.setState({ greetingName: '' });
  }

  render() {
    return (
      <div className="add-greeter">
        <input
          type='text'
          onChange={this.handleUpdate}
          value={this.state.greetingName}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}
