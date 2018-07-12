import React from 'react';
import './FinalCv.css'

class SideDivInFinalForm extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

render(){
  return <div  className="sideDivinCV">

<div className="contentInCV">
<div className="imgDiv">
<img className="img" src={this.props.src} alt="profile Img"/>
</div>
<div className="name">{this.props.name}</div>
<div className="contactDataDiv">
<h3>Email: <span className="contactDataSpan">{this.props.email}</span></h3>
<h3>Mobile: <span className="contactDataSpan">{this.props.mobile}</span></h3>
<h3>Telephone: <span className="contactDataSpan">{this.props.telephone}</span></h3>
</div>
<div className="skillsDiv">
<h3>SKILLS</h3>
<li>
{this.props.skills}
</li>
</div>
<div className="skillsDiv">
<h3>EXPERIANCE</h3>
<li>
{this.props.experiance}
</li>
</div>
</div>
  </div>
}


}


export default SideDivInFinalForm;
