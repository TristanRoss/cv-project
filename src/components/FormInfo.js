import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Education from './Education';

export class FormInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      numEducation: 1,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addEducation() {
    console.log(this.state.numEducation);
    this.setState({
      numEducation: this.state.numEducation + 1,
    })
  }

  render() {

    const formStyle = {
      width: "700px",
      margin: "50px auto",
      border: "1px solid #dbdbdb",
      borderRadius: "1px",
      padding: "20px",
    }

    const buttonStyle = {
      marginTop: "20px",
    }

    const headerOneStyle = {
      borderBottom: "1px solid #dbdbdb",
    }

    const headerStyle = {
      fontSize: "20px",
      paddingTop: "20px",
      paddingBottom: "10px",
    }

    const educations = [];

    for (let i = 0; i < this.state.numEducation; i++) {
      educations.push(<Education key={i} number={i + 1} headerStyle={headerStyle} handleInputChange={this.handleInputChange}></Education>)
    }

    return (
      <div>
        <Form style={formStyle} onSubmit={this.props.handleClick}>
          <h1 style={headerOneStyle}>CV Generator</h1>
          <h2 style={headerStyle}>Personal Information</h2>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange}/>
          </FormGroup>
          <div>
            {educations}
          </div>
          <Button color="primary" onClick={this.addEducation}>Add Education (optional)</Button>
          
        
          <Button style={buttonStyle} color="primary">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default FormInfo
