import React from 'react';
import './ContactSectionComponent.css'

class ContactSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }


render(){return <div className="ContactSectionComponent">

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
<input type="text" className="input"/>
<input type="email" className="input"/>
<input type="text" className="input" />
<input type="text" className="input"/>
<textarea className="textarea" rows="10" cols="30" className="input" placeholder=" Write your address.."></textarea>

</div>

</div>
  </div>

}


}


export default ContactSectionComponent;
