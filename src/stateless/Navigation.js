import React from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
  return (
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
        <Nav pullRight>
          <LinkContainer to='/administrator'>
            <NavItem>Administrator</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navigation; 