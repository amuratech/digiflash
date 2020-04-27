import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CLIENT_ID = "f62e1f4242f2975a640f";
const REDIRECT_URI = "https://8b8bfaf6.ngrok.io/";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar navbar="dark" bg="dark" expand="md" fixed="top">
          <Navbar.Brand href="#" className="text-white">DigiFlash</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
            >
              Login
            </a>
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
