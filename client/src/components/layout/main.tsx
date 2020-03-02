import * as React from "react";
import { Component } from "react";
import { Side } from "./side";

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <h2>main</h2>
        <aside>
          <Side />
        </aside>
      </div>
    );
  }
}
