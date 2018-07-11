import React from 'react';
import './EducationSectionComponent.css'

class EducationSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

render(){return <div className="EducationSectionComponent">
<div className="span educationSpan">If you have completed any education, this is a section to include it.</div>
<div className='educationInputs'>

<span className="span">Degree</span><input type="text" className="input education"/>
<span className="span">Date</span><input type="date" className="input education" />
<span className="span">School</span><input type="text" className="input education"/>

</div>
<div className="span educationSpan">Add some more info about this degree</div>

<textarea rows="10" cols="30" className="input educationtextarea" placeholder="  Add some more info about this degree......"></textarea>
<div><button className="button"><i class="fas fa-plus"></i> ADD MORE</button></div>


  </div>}

}
export default EducationSectionComponent;
