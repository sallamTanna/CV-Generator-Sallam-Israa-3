import React from 'react';

class EducationSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.allStates(e.target.id, e.target.value)
  }

render(){

console.log(this.state);
  return <div>
<span className="span">If you”ve completed any education, this is a section to include it.</span>
<span className="span">Degree</span>
<input type="text" className="input" onChange={this.handleInputChange} id="degree"/>


<span className="span">Date</span>
<input type="date" className="input" onChange={this.handleInputChange} id="date"/>


<span className="span">School</span>
<input type="text" className="input" onChange={this.handleInputChange} id="school"/>


<textarea rows="10" cols="30" className="input" onChange={this.handleInputChange} id="moreEducation">Add some more info about this degree......</textarea>
<button className="button">ADD MORE</button>

  </div>}

}
export default EducationSectionComponent;
