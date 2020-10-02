import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import BulletPoint from './BulletPoint';

export class Job extends Component {

  constructor(props) {
    super(props);
  

    this.state = {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      numBullets: 1,
      bulletPoints: [],
      key: this.props.number - 1,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addBulletPoint = this.addBulletPoint.bind(this);
  }

  handleInputChange(event) {
    if (event.hasOwnProperty('bulletPoint')) {
      const bullets = this.state.bulletPoints.slice();
      bullets[event.key] = event;
      this.setState({
        bulletPoints: bullets 
      });
    } else {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
    this.props.hIC(this.state);
  }

  addBulletPoint() {
    this.setState({
      numBullets: this.state.numBullets + 1,
    })
  }

  
  render() {

    const bulletPoints = [];

    for (let i = 0; i < this.state.numBullets; i++) {
      bulletPoints.push(<BulletPoint key={i} hIC={this.handleInputChange} number={i + 1}></BulletPoint>)
    }


    return (
      <div>
        <h2 style={this.props.headerStyle}>{'Work Experience ' + this.props.number}</h2>
          <FormGroup>
            <Label for="company">Company</Label>
            <Input type="text" name="company" value={this.state.company} onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="startDate">Start Date</Label>
            <Input type="text" name="startDate" value={this.state.startDate} onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="endDate">End Date</Label>
            <Input type="text" name="endDate" value={this.state.endDate} onChange={this.handleInputChange}/>
          </FormGroup>
          <div>
            {bulletPoints}
          </div>
          <Button outline color="primary" onClick={this.addBulletPoint}>Add Bullet Point (optional)</Button>
      </div>
    )
  }
}

export default Job
