import React from 'react';
import ContactSectionComponent from './ContactSectionComponent';
import SummarySectionComponent from './SummarySectionComponent';
import EducationSectionComponent from './EducationSectionComponent';
import ExperianceSectionComponent from './ExperianceSectionComponent';
import SkillsSectionComponent from './SkillsSectionComponent';
import ImageSectionComponent from './ImageSectionComponent';
import SideDivInQuestionPage from './SideDivInQuestionPage';
import './../App.css'

class AllSections extends React.Component{

render(){

  console.log(this.props)
  return <div className="AllSections">

<SideDivInQuestionPage />
<div className="content">
<ContactSectionComponent answers={this.props.answers} log={this.props.log}  />
<SummarySectionComponent allStates={this.log}/>
<EducationSectionComponent allStates={this.log}/>
<ExperianceSectionComponent allStates={this.log}/>
<SkillsSectionComponent allStates={this.log}/>
<ImageSectionComponent allStates={this.log}/>
</div>
  </div>}

}
   export default AllSections;
