import React from 'react';
import './ImageSectionComponent.css'

class ImageSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){return <div className="ImageSectionComponent">

    <span className="span">Add professional image for you<br/><br/></span>
    <label className="imageDiv">Browse
    <input type="file" />
    </label>
    </div>}

}


export default ImageSectionComponent;
