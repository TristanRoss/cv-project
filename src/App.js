import React, { Component } from 'react';
import FormInfo from './components/FormInfo';
import { Button } from 'reactstrap';

export class App extends Component {
  
  constructor() {
    super();
    this.state = {
      showForm: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.setState({showForm: !this.state.showForm});
    console.log(item);
  }

  render() {

    const buttonStyle = {
      margin: "10px",
    }

    return (
      <div>

        { this.state.showForm && (<FormInfo buttonStyle={buttonStyle} handleClick={this.handleClick}></FormInfo>) }
        { !this.state.showForm && (<Button style={buttonStyle} color="primary" onClick={this.handleClick}>Enter information</Button>)}
      </div>
    )
  }
}

export default App

