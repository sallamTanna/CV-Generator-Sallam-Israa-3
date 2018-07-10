import React from 'react';

import ContactSectionComponent from './ContactSectionComponent';
import SummarySectionComponent from './SummarySectionComponent';
import EducationSectionComponent from './EducationSectionComponent';
import ExperianceSectionComponent from './ExperianceSectionComponent';
import SkillsSectionComponent from './SkillsSectionComponent';
import ImageSectionComponent from './ImageSectionComponent';


class AllSections extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }


render(){return <div>
<ContactSectionComponent />
<SummarySectionComponent />
<EducationSectionComponent />
<ExperianceSectionComponent />
<SkillsSectionComponent />
<ImageSectionComponent />
  </div>}


}


export default AllSections;
