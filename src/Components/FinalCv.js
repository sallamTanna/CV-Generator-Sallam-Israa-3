import React from 'react';
import SideDivInFinalForm from './SideDivInFinalForm';

class FinalCv extends React.Component{
  constructor(props){
    super(props);
    this.state={name:'',};
console.log('props in final CV',props);
  }



render(){return <div>

<SideDivInFinalForm />
<img src={this.props.imgSrc}/>
<h2>Your name is:{this.props.username}</h2>
<h3>Email:{this.props.email}</h3>
<h3>Mobile:{this.props.mobile}</h3>
<h3>Telephone:{this.props.telephone}</h3>
<h3>Degree:{this.props.degree}</h3>
<h3>School:{this.props.school}</h3>
<h3>Date:{this.props.date}</h3>
<h6>{this.props.moreEducation}</h6>
<h3>Skills:{this.props.skill}</h3>
<h3>experiance:{this.props.experiance}</h3>



<h1>SUMMARY{this.props.summary}</h1>
<h1>EDUCATION{this.props.education}</h1>
  </div>}

}


export default FinalCv;
