import React from 'react';

class ImageSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){return <div>

    <span className="span">Add professional image for you</span>
    <input type="file" />
    </div>}

}


export default ImageSectionComponent;
