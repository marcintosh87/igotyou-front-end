import React from "react";
import { Nav } from "react-bootstrap";

export default function CenterNav() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/" className="center-nav-link">
          Gratitude Wall
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Help-Wall" href="/DC" className="center-nav-link">
          Help Wall
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
