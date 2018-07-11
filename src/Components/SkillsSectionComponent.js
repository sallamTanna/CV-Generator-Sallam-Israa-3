import React from 'react';
import './SkillsSectionComponent.css'

class SkillsSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.handleInputChange=this.handleInputChange.bind(this);
  }


  handleInputChange(e) {
    this.props.allStates(e.target.id, e.target.value)
  }

render(){return <div className="SkillsSectionComponent">
<div className="span skillsIntro">This section contains all the skills that you have.. </div>
  <div className="span skillsSpan">Your Skill</div>
  <input type="text" className="input skillsInput" onChange={this.handleInputChange} id="skill"/>
  <div>
  <button className="button"><i className="fas fa-plus"></i> ADD MORE</button>
  </div>
  </div>}


}


export default SkillsSectionComponent;
