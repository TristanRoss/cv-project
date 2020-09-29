import React, { Component } from 'react';
import Form from './components/Form';
import { Button } from 'reactstrap';

export class App extends Component {
  
  constructor() {
    super();
    this.state = {
      showForm: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({showForm: !this.state.showForm})
  }

  render() {

    const buttonStyle = {
      margin: "10px",
    }

    return (
      <div>
        { this.state.showForm && (<Form></Form>) }
        { this.state.showForm === false ? (<Button style={buttonStyle} color="primary" onClick={this.handleClick}>Enter information</Button>) : (<Button style={buttonStyle} color="primary" onClick={this.handleClick}>Close</Button>) }
        
      </div>
    )
  }
}

export default App

