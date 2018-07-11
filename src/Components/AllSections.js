import React from 'react';
import ContactSectionComponent from './ContactSectionComponent';
import SummarySectionComponent from './SummarySectionComponent';
import EducationSectionComponent from './EducationSectionComponent';
import ExperianceSectionComponent from './ExperianceSectionComponent';
import SkillsSectionComponent from './SkillsSectionComponent';
import ImageSectionComponent from './ImageSectionComponent';
import SideDivInQuestionPage from './SideDivInQuestionPage';
import './../App.css';
let newObj= {};


class AllSections extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      degree:'',
      experiance:'',
      date:'',
      school:'',
      moreEducation:'',
      skill:'',
      summary:'',
    }
this.log=this.log.bind(this);
  // this.sendDataFromAllSectionComponentToAppComponent=this.sendDataFromAllSectionComponentToAppComponent.bind(this);
}
log(name, value){this.setState({[name]: value});
newObj=this.state;
}


handleInputChange(e) {
  this.props.allStates(e.target.id, e.target.value)
}



render()
 {console.log(newObj);
   return <div className="AllSections" >

{this.props.sendDataToCVComponent(newObj)}
<SideDivInQuestionPage />
<div className="content">
<ContactSectionComponent allStates={this.log}  />
<SummarySectionComponent allStates={this.log}/>
<EducationSectionComponent allStates={this.log}/>
<ExperianceSectionComponent allStates={this.log}/>
<SkillsSectionComponent allStates={this.log}/>
<ImageSectionComponent allStates={this.log} />
</div>
  </div>}

}
   export default AllSections;
