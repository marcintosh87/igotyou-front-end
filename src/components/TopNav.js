import React from "react";
import logo from "./../img/header-logo.png";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function TopNav() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help-form">Help Me</Nav.Link>
            <Nav.Link href="/gratitude-form">Send Gratitude</Nav.Link>
            <NavDropdown title="Become a Hero" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                List an item for Donation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sponsor a Family
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Birthday Hero
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Donate</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
