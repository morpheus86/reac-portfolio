import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom'
import Home from './Home'
import Navigation from './stateless/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="App">
          <header className="Hamadou Tidiane Diallo Portfolio">
            <h1 className="App-title">Welcome To Hamadou Tidiane Diallo Homepage</h1>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
