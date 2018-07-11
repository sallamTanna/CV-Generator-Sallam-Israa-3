import React from 'react';
import './ImageSectionComponent.css';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';


class ImageSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
    this.generateCV = this.generateCV.bind(this);
  }

  handleInputChange(e) {
    this.props.allStates(e.target.id, e.target.value)
  }
  
  generateCV(){
    this.props.generateFinalCV();
  }

  render(){return <div className="ImageSectionComponent">

    <span className="span">Add professional image for you<br/><br/></span>
    <label className="imageDiv">Browse
    <input type="file" />
    </label>
     <Link to="/finalcv" >Go to Results</Link>
    </div>}

}


export default ImageSectionComponent;
