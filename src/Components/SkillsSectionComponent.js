import React from 'react';

class SkillsSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.allStates(e.target.id, e.target.value)
  }


render(){return <div>
  <span className="span">Your Skill</span>
  <input type="text" className="input" onChange={this.handleInputChange} id="skill"/>
  <button className="button">ADD MORE</button>
  </div>}


}


export default SkillsSectionComponent;
