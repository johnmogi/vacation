import * as React from "react";
import { Component } from "react";

import { Main } from "./main";
import { Footer } from "./footer";
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MenuAppBar from "./appbar";
// import MenuAppBar from "./appbar";

export class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <Container
            fixed
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "90vh" }}
          >
            <Typography />
            <div className="header">
              <MenuAppBar />
            </div>

            <Main />
          </Container>
          <Container
            fixed
            component="div"
            style={{
              backgroundColor: "#ccc",
              height: "10vh",
              textAlign: "center"
            }}
          >
            <footer>
              <Footer />
            </footer>
          </Container>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
