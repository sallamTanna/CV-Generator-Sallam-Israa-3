import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import './App.css';
import HomePageComponent from './Components/HomePageComponent';
import AllSections from './Components/AllSections';
import FinalCv from './Components/FinalCv';


class App extends React.Component {
constructor(props){
  super(props);
  this.state={name:''};
  this.updateData=this.updateData.bind(this);
}


updateData(state){this.setState({name:state.name})}

  render() {
      return (
        <BrowserRouter>
        <div>
        <Switch>
<Route exact path='/' component={HomePageComponent} />
<Route exact path='/QuestionForms'  render={(props) => (<AllSections sendDataToCVComponent={this.updateData} />)} />
<Route exact path='/finalcv' render={(props) => (<FinalCv username={this.state.name} />)}/>


          <HomePageComponent name ='jjh' />
         </Switch>
        </div>
      </BrowserRouter>
      )
    }
  }



export default App;
