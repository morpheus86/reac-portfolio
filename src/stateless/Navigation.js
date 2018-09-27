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
            <NavItem eventKey={1}>About</NavItem>
          </LinkContainer>
          <LinkContainer to='/portfolio'>
            <NavItem eventKey={2}>Portfolio</NavItem>
          </LinkContainer>
          <LinkContainer to='/education'>
            <NavItem eventKey={1}>Education</NavItem>
          </LinkContainer>
          <LinkContainer to='/projects'>
            <NavItem eventKey={1}>Projects</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}> else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link Right
      </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
      </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navigation; 