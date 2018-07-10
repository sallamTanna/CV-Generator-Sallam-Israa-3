import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 import './App.css';
import HomePageComponent from './Components/HomePageComponent';
import AllSections from './Components/AllSections';


class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
        <div>
        <Switch>
          <Route exact path='/' component={HomePageComponent} />
          <Route exact path='/QuestionForms' component={AllSections} />
         </Switch>
        </div>
      </BrowserRouter>
      )
    }
  }



export default App;
