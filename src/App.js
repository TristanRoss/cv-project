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

    const cvStyle = {
      width: "900px",
      margin: "50px auto",
      border: "1px solid #dbdbdb",
      borderRadius: "1px",
      padding: "20px"
    }

    const educations = [];
    const jobs = [];
    if (this.state.hasOwnProperty("obj")) {
      if (this.state.obj.hasOwnProperty("numEducations")) {
        educations.push(<h2 key={0} style={{fontSize: "28px", marginBottom: '15px'}}>Education</h2>)
        for (let i = 0; i < this.state.obj.educations.length; i++) {
          let currentEdu = this.state.obj.educations[i];
          educations.push(<div key={i + 1}>
            <h2 style={{fontSize: "20px", display: 'inline'}}>{currentEdu.school}</h2>
            <h2 style={{fontSize: "20px", display: "inline", float: 'right'}}>{currentEdu.date}</h2>
            <h3 style={{fontSize: "16px", fontWeight: '400'}}>{currentEdu.degree + ' ' + currentEdu.major}</h3>
          </div>);
        }
      }
      if (this.state.obj.hasOwnProperty("numJobs")) {
        jobs.push(<h2 key={0} style={{fontSize: "28px", marginTop: "30px", marginBottom: "15px"}}>Work Experience</h2>)
        for (let i = 0; i < this.state.obj.jobs.length; i++) {
          const bulletPoints = [];
          let currentJob = this.state.obj.jobs[i];
          for (let j = 0; j < this.state.obj.jobs[i].bulletPoints.length; j++) {
            let currentBulletPoint = this.state.obj.jobs[i].bulletPoints[j];
            console.log(currentBulletPoint)
            bulletPoints.push(<li key={j}>
              {currentBulletPoint.bulletPoint}
            </li>);
          }
          jobs.push(<div key={i + 1}>
            <h2 style={{fontSize: "20px", display: 'inline'}}>{currentJob.title}</h2>
            <h2 style={{fontSize: "20px", display: "inline", float: 'right'}}>{currentJob.startDate + ' - ' + currentJob.endDate}</h2>
            <h3 style={{fontSize: "16px", fontWeight: '400'}}>{currentJob.company}</h3>
            <ul>{bulletPoints}</ul>
          </div>);
        }
      }
    }

    return (
      <div>
        {this.state.showCV && 
        
        <div style={cvStyle}>
          <h1 style={{textAlign: 'center'}}>{this.state.obj.name}</h1>
          <h2 style={{textAlign: 'center', fontSize: "20px", fontWeight: '300'}}>{this.state.obj.email}</h2>
          <h2 style={{textAlign: 'center', fontSize: "20px", fontWeight: '300', marginBottom: '30px', paddingBottom: "20px", borderBottom: "1px solid gray"}}>{this.state.obj.phone}</h2>
          <div>
            {educations}
          </div>
          <div>
            {jobs}
          </div>
        </div>
        
        }
        <FormInfo buttonStyle={buttonStyle} show={this.showForm} handleClick={this.handleClick}></FormInfo>
        { !this.state.showForm && <div style={divStyle}><Button style={buttonStyle} color="primary" onClick={this.handleClickEnter}>Enter information</Button></div>}
      </div>
    )
  }
}

export default App

