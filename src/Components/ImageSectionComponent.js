import React from 'react';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';


class ImageSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
    this.generateCV = this.generateCV.bind(this);
  }


  generateCV(){
    this.props.generateFinalCV();
  }

  render(){return <div>

    <span className="span">Add professional image for you</span>
    <input type="file" /><br/>
     <Link to="/finalcv" >Go to Results</Link>
     </div>}

}


export default ImageSectionComponent;
