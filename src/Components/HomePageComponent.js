import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';


class HomePageComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.handleStartGeneratingButton=this.handleStartGeneratingButton.bind(this);
  }

handleStartGeneratingButton(){
window.location = 'QuestionForms';
}

render() { return  <div className="bodyTag">


   <div className="HomePageComponent">


  <h1 className="h1">CV GENERATOR</h1>
  <h2 className="h2">Start Creating your CV online now</h2>
  <span className="h3">Answer some question and get your CV ready!</span>
  <button className="getSatrtButton" onClick={this.handleStartGeneratingButton}>Let’s Start! </button>

  </div>
</div>

}


}


export default HomePageComponent;
