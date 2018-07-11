import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import './App.css';
import HomePageComponent from './Components/HomePageComponent';
import AllSections from './Components/AllSections';
import FinalCv from './Components/FinalCv';


class App extends React.Component {
  
  render() {
      return (
        <BrowserRouter>
        <div>
        <Switch>
          <Route exact path='/' component={HomePageComponent} />
          <Route exact path='/QuestionForms' component={AllSections} />
          <Route exact path='/finalcv' component={FinalCv} />
         </Switch>
        </div>
      </BrowserRouter>
      )
    }
  }



export default App;
