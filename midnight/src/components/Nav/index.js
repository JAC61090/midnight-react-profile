import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavReturn() {
  return (
    <div style={{ paddingTop: "75px" }}>
      <Navbar className={"Nav"} fixed="top" expand="lg">
        <Navbar.Brand href="/">Jason A Carrazco</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/'>Home</Link>
            <Link to='/contact'> Contact</Link>
            <Link to='/portfolio'> Portfolio</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavReturn;
