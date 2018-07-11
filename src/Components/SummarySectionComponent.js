import React from 'react';
import './SummarySectionComponent.css'

class SummarySectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.handleInputChange=this.handleInputChange.bind(this);
  }


  handleInputChange(e) {
    this.props.log(e.target.id, e.target.value)
  }


render(){return <div className="SummarySectionComponent">
<div className="span summarytext">In this section, you have to write a summary statement about your your career accomplishments, as well as your future ambitions. How will you impact the target company? Why should they continue reading? What sets you apart from everyone else? You might consider hiring a CV writing service if you’re unsure how to create a compelling summary statement.<br/><br/>
</div>

<textarea onChange={this.handleInputChange} id="summary" rows="10" cols="30" className="input summarytextarea" placeholder="  Enter your summary statement..."></textarea>
  </div>}

}


export default SummarySectionComponent;
