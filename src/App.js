import React, {
  Component
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import HomePageComponent from './Components/HomePageComponent';
import AllSections from './Components/AllSections';
import FinalCv from './Components/FinalCv';

class App extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {

    answers:{
      name: '',
      email: '',
      cellPhone:'',
      homePhone:'',
      address:'',
      degree: '',
      experiance: '',
      date: '',
      school: '',
      moreEducation: '',
      skill: '',
      summary: '',
    }
}
    this.log = this.log.bind(this);
    this.generateFinalCV = this.generateFinalCV.bind(this);
  }

  log(name, value) {
    console.log({name, value})
    this.setState(prevState => {
      return {answers:{...prevState.answers, [name]: value}}

    })

  }
  generateFinalCV() {
    window.location = "/finalcv";
  }

render() {
  console.log(this.state.answers)
  return ( <BrowserRouter >
    <Switch >
    <Route exact path = '/'  component = {  HomePageComponent  }/>
    < Route exact path = '/QuestionForms'render ={ () => <AllSections answers={this.state.answers} log={this.log}/>}/>
     <  Route exact path = '/finalcv' render = {() => < FinalCv username={this.state.answers.name} email={this.state.answers.email} mobile={this.state.answers.cellPhone} telephone={this.state.answers.homePhone} summary={this.state.answers.summary} education={this.state.answers.education}/>}/ >
      </Switch>
      </BrowserRouter>
    )
  }

}
export {
  App
};
