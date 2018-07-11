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
<SummarySectionComponent  answers={this.props.answers} log={this.props.log} />
<EducationSectionComponent  answers={this.props.answers} log={this.props.log} />
<ExperianceSectionComponent  answers={this.props.answers} log={this.props.log} />
<SkillsSectionComponent  answers={this.props.answers} log={this.props.log} />
<ImageSectionComponent  answers={this.props.answers} log={this.props.log} />
</div>
  </div>}

}
   export default AllSections;
