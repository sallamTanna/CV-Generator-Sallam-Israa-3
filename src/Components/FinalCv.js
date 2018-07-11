import React from 'react';
import SideDivInFinalForm from './SideDivInFinalForm';

class FinalCv extends React.Component{
  constructor(props){
    super(props);

  }



render(){return <div>

<SideDivInFinalForm />
<img src={this.props.imgSrc}/>
<h2>Your name is:{this.props.username}</h2>
<h3>Email:{this.props.email}</h3>
<h3>Mobile:{this.props.mobile}</h3>
<h3>Telephone:{this.props.telephone}</h3>



<h1>SUMMARY{this.props.summary}</h1>
<h1>EDUCATION{this.props.education}</h1>
  </div>}

}


export default FinalCv;
