import React from 'react';


class ExperianceSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.allStates(e.target.id, e.target.value)
  }

render(){return <div>
  <span className="span">Your Experiance</span>
  <input type="text" className="input" onChange={this.handleInputChange} id="experiance"/>

  <button className="button">ADD MORE</button>
  </div>
}

}



export default ExperianceSectionComponent;
