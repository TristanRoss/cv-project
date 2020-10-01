import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


export class Education extends Component {

  constructor(props) {
    super(props);
  

    this.state = {
      school: "",
      degree: "",
      date: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  
  render() {
    return (
      <div>
        <h2 style={this.props.headerStyle}>{'Education ' + this.props.number}</h2>
          <FormGroup>
            <Label for="school">School</Label>
            <Input type="text" name="school" value={this.state.school} onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="degree">Degree</Label>
            <Input type="text" name="degree" value={this.state.degree} onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="text" name="date" value={this.state.date} onChange={this.handleInputChange}/>
          </FormGroup>
      </div>
    )
  }
}

export default Education
