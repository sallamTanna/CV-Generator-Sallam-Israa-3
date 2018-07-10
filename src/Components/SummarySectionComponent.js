import React from 'react';

class SummarySectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }


render(){return <div>
<span className="span">In this section, you have to write a summary statement about your your career accomplishments, as well as your future ambitions. How will you impact the target company? Why should they continue reading? What sets you apart from everyone else? You might consider hiring a CV writing service if you’re unsure how to create a compelling summary statement.</span>
<textarea rows="10" cols="30" className="input">Enter your summary statement...</textarea>
  </div>}

}


export default SummarySectionComponent;
