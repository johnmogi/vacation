import * as React from "react";
import { Component } from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import { BrowserRouter } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout container">
          <div className="header">
            <Header />
          </div>

          <Main />
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
