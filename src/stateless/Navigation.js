import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import posed from 'react-pose';

export const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
export const Item = posed.ul({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const Navigation = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        Welcome to Hamadou's Portfolio
    </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to='/home'>
          <NavItem >Home</NavItem>
        </LinkContainer>
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
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation;

