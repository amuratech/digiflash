import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import GithubAuth from './GithubAuth';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar navbar="dark" bg="dark" expand="md" fixed="top">
          <Navbar.Brand href="#" className="text-white">DigiFlash</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              < GithubAuth />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
