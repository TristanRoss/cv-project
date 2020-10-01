import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


export class BulletPoint extends Component {

  constructor(props) {
    super(props);
  

    this.state = {
      text: "",
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
          <FormGroup>
            <Label for="bulletPoint">{'Bullet Point ' + this.props.number}</Label>
            <Input type="text" name="bulletPoint" value={this.state.text} onChange={this.handleInputChange}/>
          </FormGroup>
      </div>
    )
  }
}

export default BulletPoint