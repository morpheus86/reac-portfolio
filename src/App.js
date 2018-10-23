import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
// import Navigation from './stateless/Navigation'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  <Route
    render={({ location }) => (

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink className='navi-links' to='/home' >Home</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/about'>
              <NavItem >About</NavItem>
            </LinkContainer>
            <LinkContainer to='/portfolio'>
              <NavItem>Portfolio</NavItem>
            </LinkContainer>
            <LinkContainer to='/education'>
              <NavItem >Education</NavItem>
            </LinkContainer>
            <LinkContainer to='/projects'>
              <NavItem>Projects</NavItem>
            </LinkContainer>
            <LinkContainer to='/skills'>
              <NavItem>Skills</NavItem>
            </LinkContainer>
          </Nav>
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path='/home' component={Home} key='home' />
                <Route exact path='/about' component={About} key='about' />
                <Route exact path='/portfolio' component={Portfolio} key='portfolio' />
                <Route exact path='/education' component={Education} key='education' />
                <Route exact path='/projects' component={Projects} key='projects' />
                <Route exact path='/skills' component={Skills} key='skills' />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </Navbar.Collapse>
      </Navbar>
    )}
  />
);

export default App;
