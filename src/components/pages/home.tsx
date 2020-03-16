import * as React from "react";
import { Component } from "react";
import { Register } from "./auth/register";
import { SignIn } from "./auth/login";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Sign in or register to follow vacations:</h1>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item xs={5}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      <SignIn />
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              <Grid item xs={5}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      <Register />
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
