import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';

export default function AppNavbar() {
  return (
    <Navbar id="navbar" fixed='top' variant='dark' expand='lg' style={{ backgroundColor: '#203527' }}>
      <Navbar.Brand href='#'>CP Problems</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id='navbar-nav'>
        <Nav>
          <Nav.Link href='#list'>List</Nav.Link>
          <Nav.Link href='#options'>Options</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}