import * as React from "react";
import { Component } from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

export class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
