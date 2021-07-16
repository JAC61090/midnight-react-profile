import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';

function NavReturn() {
  return (
    // <div style={{ paddingTop: "75px" }}>
    //   <Navbar className={"Nav"} fixed="top" expand="lg">
    //     <Navbar.Brand href="/">Jason A. Carrazco</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mr-auto " className="ml-auto justify-content-end">
    //         <Link to="/">
    //           <MDBIcon icon="home" className="mr-1" />
    //           Home
    //         </Link>
    //         <Link to="/contact">
    //           <MDBIcon icon="envelope" className="mr-1" />
    //           Contact
    //         </Link>
    //         <Link to="/portfolio">
    //           <MDBIcon icon="code" className="mr-1" />
    //           Portfolio
    //         </Link>
    //         <Link to="/resume">
    //           <MDBIcon icon="file" className="mr-1" />
    //           Resume
    //         </Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>

    <div>
      <Navbar bg="light" variant="light" className="h-100">
        <Navbar className={"Nav"} fixed="top" expand="lg" >
          {/* <Container> */}
          <Navbar.Brand href="#"><strong>Jason A. Carrazco</strong></Navbar.Brand>
          <Nav className="me-auto" className="mr-auto " className="ml-auto justify-content-end">
            <Nav.Link href="/">
            <Button variant="primary" href="/" className="mr-2">
              <MDBIcon icon="home" className="mr-2" />
              About Me
              </Button>
            </Nav.Link>
            <Nav.Link href="#contact">
            <Button variant="primary" href="#contact" className="mr-2">
              <MDBIcon icon="envelope" className="mr-2" />
              Contact
              </Button>
            </Nav.Link>
            <Nav.Link href="#portfolio">
            <Button variant="primary" href="#portfolio" className="mr-2">
              <MDBIcon icon="code" className="mr-2" />
              Portfolio
              </Button>
            </Nav.Link>
            <Nav.Link href="#resume">
            <Button variant="primary" href="#resume" className="mr-2">
              <MDBIcon icon="file" className="mr-2" />
              Resume
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default NavReturn;
