import * as React from "react";
import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar bg="dark">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <span>|</span>
          <NavLink to="/vacations" exact>
            Vacations
          </NavLink>
        </Navbar>
      </div>
    );
  }
}
