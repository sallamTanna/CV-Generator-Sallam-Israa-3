import React from 'react';
import './ExperianceSectionComponent.css'

class ExperianceSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.allStates(e.target.id, e.target.value)
  }

render(){return <div className="ExperianceSectionComponent">

<div className="span experienceIntro">List any formal job experience and any volunteer or unpaid experience you have.</div>
<div className="flexColumn">  <span className="span experienceSpan">Your Experiance</span>
<input type="text" className="input experienceInput" onChange={this.handleInputChange} id="experiance"/>
  <button className="button"><i className="fas fa-plus"></i> ADD MORE</button></div>

  </div>
}

}



export default ExperianceSectionComponent;
