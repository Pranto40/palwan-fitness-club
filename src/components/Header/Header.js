import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='sticky-top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
              <img className='logo' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="nav-item">
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/services'>Services</CustomLink>
                <CustomLink to='/blog'>Blog</CustomLink>
                <CustomLink to='/aboutMe'>About Me</CustomLink>
                <CustomLink to='/login'>login</CustomLink>
                <CustomLink to='/signUP'>Sign Up</CustomLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;