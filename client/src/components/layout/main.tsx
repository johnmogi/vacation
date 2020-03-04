import * as React from "react";
import { Component } from "react";
import { Side } from "./side";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Vacations } from "../pages/vacations";
import { NotFound } from "../pages/not-found";
import { vacPage } from "../pages/one-vacation";

export class Main extends Component {
  render() {
    return (
      <div className="main row jumbotron">
        <aside className="col-2">
          <Side />
        </aside>
        <main className="container col-10 ">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/vacations" component={Vacations} exact />
            <Route path="/vacations/:id" component={vacPage} exact />
            <Route path="" component={NotFound} exact />
          </Switch>
        </main>
      </div>
    );
  }
}
