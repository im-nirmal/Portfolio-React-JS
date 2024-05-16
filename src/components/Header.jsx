import React from 'react'
// import { Container, Nav, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" id='navbar' className="bg-body">
      <Container>
        <Navbar className='logo' href="#home">Portfolio</Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav className='nav-links'>
            <Nav.Link style={{fontSize:'16px', color:'white'}} className='nav-link' href="#About">About</Nav.Link>
            <Nav.Link style={{fontSize:'16px', color:'white'}} className='nav-link' href="#skills">Skills</Nav.Link>
            <Nav.Link style={{fontSize:'16px', color:'white'}} className='nav-link' href="#projects">Projects</Nav.Link>
            <Nav.Link style={{fontSize:'16px', color:'white'}} className='nav-link' eventKey={2} href="#contact">
            Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header