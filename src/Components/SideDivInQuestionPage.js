import React from 'react';

class SideDivInQuestionPage extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }


render(){return <div className="sideDiv">
<div className="contactSideText">Contact Info</div>
<div className="summarySideText">Summary</div>
<div className="educationSideText">Education</div>
<div className="experienceText">Experience</div>
<div className="skillsText">Skills</div>
<div className="imageText">Image</div>

   </div>}

}


export default SideDivInQuestionPage;
