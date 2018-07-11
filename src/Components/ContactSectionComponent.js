import React from 'react';
let data = {};


class ContactSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      cellPhone:'',
      homePhone:'',
      address:''
    }
    this.handleInputChange=this.handleInputChange.bind(this);
  }

// handleInputChange(event){
// if(event.target.id === "name"){this.setState({name:event.target.value}); data.name=event.target.value;}
// if(event.target.id === "email"){this.setState({email:event.target.value}); data.email=event.target.value;}
// if(event.target.id === "cellPhone"){this.setState({cellPhone:event.target.value}); data.cellPhone=event.target.value;}
// if(event.target.id === "homePhone"){this.setState({homePhone:event.target.value}); data.homePhone=event.target.value;}
// if(event.target.id === "address"){this.setState({address:event.target.value}); data.address=event.target.value;}
// }

handleInputChange(e) {
  this.props.allStates(e.target.id, e.target.value)
}


render(){return <div>
<span className="span">Your name: </span>
<input type="text" className="input" onChange={this.handleInputChange} id="name" />

<span className="span">Email: </span>
<input type="email" className="input" onChange={this.handleInputChange} id="email"/>

<span className="span">Cell Phone: </span>
<input type="text" className="input" onChange={this.handleInputChange} id="cellPhone"/>

<span className="span">Home Phone: </span>
<input type="text" className="input" onChange={this.handleInputChange} id="homePhone"/>

<span className="span">Address: </span>
<textarea rows="10" cols="30" className="input" onChange={this.handleInputChange} id="address">Enter your address...</textarea>


  </div>}


}

 export  default ContactSectionComponent;
