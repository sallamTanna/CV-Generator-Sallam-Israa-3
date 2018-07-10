import React from 'react';

class ContactSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }


render(){return <div>
<span className="span">Your name: </span><input type="text" className="input"/>
<span className="span">Email: </span><input type="email" className="input"/>
<span className="span">Cell Phone: </span><input type="text" className="input" />
<span className="span">Home Phone: </span><input type="text" className="input"/>
<span className="span">Address: </span><textarea rows="10" cols="30" className="input">The cat was playing in the garden.</textarea>

  </div>}


}


export default ContactSectionComponent;
