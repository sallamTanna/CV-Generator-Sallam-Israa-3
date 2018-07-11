import React from 'react';
import './ContactSectionComponent.css';
let data = {};


class ContactSectionComponent extends React.Component{

constructor(props){
  super(props)
  this.handleInputChange = this.handleInputChange.bind(this)
}


handleInputChange(e) {
  this.props.log(e.target.id, e.target.value)
}


render(){
  return <div className="ContactSectionComponent">

<div>
Here we go, Fill this form then press GENERATE Button to get your CV!!
<br/>
<br/> <div className="span contactIntro">This section is related to your personal contact information, make sure to enter the correct data!<br/><br/></div></div>
<div className='contactInfoContainer'>
<div className="spans">
<span className="span">Your name: </span>
<span className="span">Email: </span>
<span className="span">Cell Phone: </span>
<span className="span">Home Phone: </span>
<span className="span">Address: </span>
</div>
<div className="inputs">
<input type="text" className="input" value={this.props.answers.name} onChange={this.handleInputChange} id="name"/>
<input type="email" className="input" onChange={this.handleInputChange} id="email"/>
<input type="text" className="input" onChange={this.handleInputChange} id="cellPhone"/>
<input type="text" className="input" onChange={this.handleInputChange} id="homePhone"/>
<textarea className="textarea" rows="10" cols="30" className="input" placeholder=" Write your address.." onChange={this.handleInputChange} id="address"></textarea>

</div>

</div>
  </div>

}


}

 export  default ContactSectionComponent;
