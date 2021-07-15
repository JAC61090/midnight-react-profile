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

function NavReturn() {
  return (
    <div style={{ paddingTop: "75px" }}>
      <Navbar className={"Nav"} fixed="top" expand="lg" >
        <Navbar.Brand href="/">Jason A. Carrazco</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto " className="ml-auto justify-content-end">
            <Link to='/'><MDBIcon icon="home" className="mr-1" />Home</Link>
            <Link to='/contact'><MDBIcon icon="envelope" className="mr-1" />Contact</Link>
            <Link to='/portfolio'><MDBIcon icon="code" className="mr-1" />Portfolio</Link>
            <Link to='/resume'><MDBIcon icon="file" className="mr-1" />Resume</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavReturn;
