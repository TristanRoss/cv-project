import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Education from './Education';
import Job from './Job';

export class FormInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      numEducations: 1,
      numJobs: 1,
      jobs: [],
      educations: [],
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  handleInputChange(event) {
    if (event.hasOwnProperty('school')) {
      const edus = this.state.educations.slice();
      edus[event.key] = event;
      this.setState({
        educations: edus 
      });
    } else if (event.hasOwnProperty('company')) {
      const jbs = this.state.jobs.slice();
      jbs[event.key] = event;
      this.setState({
        jobs: jbs
      });
    }
  }

  handleFormChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addEducation(item) {
    this.setState({
      numEducations: this.state.numEducations + 1,
    })
  }

  addJob(item) {
    this.setState({
      numJobs: this.state.numJobs + 1,
    })
  }

  render() {
    const buttonStyle = {
      marginTop: "20px",
    }

    const jobButtonStyle = {
      marginTop: "30px",
    }

    const headerOneStyle = {
      borderBottom: "1px solid #dbdbdb",
    }

    const headerStyle = {
      fontSize: "20px",
      marginTop: "60px",
      marginBottom: "10px",
    }

    const educations = [];

    for (let i = 0; i < this.state.numEducations; i++) {
      educations.push(<Education key={i} number={i + 1} hIC={this.handleInputChange} headerStyle={headerStyle}></Education>)
    }

    const jobs = [];

    for (let i = 0; i < this.state.numJobs; i++) {
      jobs.push(<Job key={i} number={i + 1} hIC={this.handleInputChange} headerStyle={headerStyle}></Job>)
    }

    return (
      <div>
        <Form style={this.props.show()}>
          <h1 style={headerOneStyle}>CV Generator</h1>
          <h2 style={headerStyle}>Personal Information</h2>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" value={this.state.name} onChange={this.handleFormChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" value={this.state.email} onChange={this.handleFormChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input type="text" name="phone" value={this.state.phone} onChange={this.handleFormChange}/>
          </FormGroup>
          <div>
            {educations}
          </div>
          <Button outline color="primary" onClick={this.addEducation}>Add Education (optional)</Button>
          <div>
            {jobs}
          </div>
          <Button outline color="primary" style={jobButtonStyle} onClick={this.addJob}>Add Job (optional)</Button>
          <div>
            <Button style={buttonStyle} onClick={() => this.props.handleClick(this.state)} color="primary">Submit</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default FormInfo
