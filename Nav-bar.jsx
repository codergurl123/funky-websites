import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import "../stylesheets/navbar.css";

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="/products" style={{ color: "white" }}>
        GlamUp
      </Navbar.Brand>
      <input type="text" placeholder="Search" />
      <button className="search">Search</button>
      <Nav>
        <Nav.Link href="/cart">Cart</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
