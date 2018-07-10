import React from 'react';


class ExperianceSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }


render(){return <div>
  <span className="span">Your Experiance</span><input type="text" className="input"/>
  <button className="button">ADD MORE</button>
  </div>
}

}



export default ExperianceSectionComponent;
