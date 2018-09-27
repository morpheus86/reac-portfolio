import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Navigation from './stateless/Navigation'
import Education from './Education'
import Projects from './Projects'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/portfolio' component={Portfolio}></Route>
          <Route exact path='/education' component={Education}></Route>
          <Route exact path='/projects' component={Projects}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
