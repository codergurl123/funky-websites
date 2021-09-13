import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar className="navbar">
        <img
          src="https://img.icons8.com/plasticine/2x/stack-of-photos.png"
          className="d-inline-block align-top"
          width="60"
          height="60"
          alt="logo"
        />
        <div className="brand" style={{ fontSize: 40 }}>
          PingMe
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
