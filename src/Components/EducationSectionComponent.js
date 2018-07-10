import React from 'react';

class EducationSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

render(){return <div>
<span className="span">If you”ve completed any education, this is a section to include it.</span>
<span className="span">Degree</span><input type="text" className="input"/>
<span className="span">Date</span><input type="date" className="input" />
<span className="span">School</span><input type="text" className="input"/>
<textarea rows="10" cols="30" className="input">Add some more info about this degree......</textarea>
<button className="button">ADD MORE</button>

  </div>}

}
export default EducationSectionComponent;
