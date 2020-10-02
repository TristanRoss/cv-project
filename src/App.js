import React, { Component } from 'react';
import FormInfo from './components/FormInfo';
import { Button } from 'reactstrap';

export class App extends Component {
  
  constructor() {
    super();
    this.state = {
      showForm: false,
      showCV: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClickEnter = this.handleClickEnter.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleClick(item) {
    if (item.hasOwnProperty('name')) {
      this.setState({
        showCV: true,
        obj: item
      })
    }
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  handleClickEnter() {
    console.log(this.state);
    this.setState({
      showForm: !this.state.showForm,
      showCV: false,
    });
  }

  showForm() {
    if (this.state.showForm === true) {
      return {
        width: "700px",
        margin: "50px auto",
        border: "1px solid #dbdbdb",
        borderRadius: "1px",
        padding: "20px",
      }
    } else {
      return {
        width: "700px",
        margin: "50px auto",
        border: "1px solid #dbdbdb",
        borderRadius: "1px",
        padding: "20px",
        display: "none",
      }
    }
  }


  render() {

    const buttonStyle = {
      margin: "10px",
    }

    const divStyle = {
      width: "50%",
      margin: "0 auto",
      textAlign: "center",
    }

    return (
      <div>
        {this.state.showCV && 
        
        <div>
          <h1>{this.state.obj.name}</h1>
        </div>
        
        }
        <FormInfo buttonStyle={buttonStyle} show={this.showForm} handleClick={this.handleClick}></FormInfo>
        { !this.state.showForm && <div style={divStyle}><Button style={buttonStyle} color="primary" onClick={this.handleClickEnter}>Enter information</Button></div>}
      </div>
    )
  }
}

export default App

