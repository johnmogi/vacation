import * as React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/vacations" exact>
          Vacations
        </NavLink>
        <NavLink to="/about" exact>
          About
        </NavLink>
      </div>
    );
  }
}
