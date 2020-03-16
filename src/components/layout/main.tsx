import * as React from "react";
import { Component } from "react";
import { Side } from "./side";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Vacations } from "../pages/vacations";
import { NotFound } from "../pages/not-found";
import { vacPage } from "../pages/one-vacation";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";

export class Main extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={2}>
              <Side />
            </Grid>
            <Grid item xs={10}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/vacations" component={Vacations} exact />
                <Route path="/vacations/:id" component={vacPage} exact />
                <Route path="" component={NotFound} exact />
              </Switch>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
