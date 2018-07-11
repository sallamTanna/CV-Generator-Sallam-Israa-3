import React from 'react';

class ImageSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
    this.generateCV = this.generateCV.bind(this);
  }


  generateCV(){
    window.location = "/finalcv";
  }

  render(){return <div>

    <span className="span">Add professional image for you</span>
    <input type="file" /><br/>
    <button className="button generateCV" onClick={this.generateCV}>GENERATE!</button>
    </div>}

}


export default ImageSectionComponent;
