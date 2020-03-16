import * as React from "react";
import { Component, SyntheticEvent } from "react";
// import { UserLog } from "../../models/user-model";
interface LoginState {
  user: {
    userName: String;
    password: String;
  };
}

export class SignIn extends Component<any, LoginState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      user: {
        userName: "",
        password: ""
      }
    };
  }
  private setUserName = (args: SyntheticEvent) => {
    const userName = (args.target as HTMLInputElement).value;
    const user = { ...this.state.user };
    user.userName = userName;
    this.setState({ user });
  };
  private setUserPassword = (args: SyntheticEvent) => {
    const password = (args.target as HTMLInputElement).value;
    const user = { ...this.state.user };
    user.password = password;
    this.setState({ user });
  };
  private logUser = () => {
    // if (!this.isFormLegal()) {
    //   alert("Please correct all errors!");
    //   return;
    // }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // What type we are sending (MIME Types)
        Accept: "application/json" // What type we are expecting to get back (MIME Types)
      },
      body: JSON.stringify(this.state.user) // What data we are sending
    };

    fetch("http://localhost:3003/api/auth/login", options)
      .then(response => response.json())
      .then(user => {
        alert("user is now logged in, user:  " + user.userName);
        this.props.history.push("/vacations"); // Redirect to "/products" route.
      })
      .catch(err => alert(err.message));
  };

  render() {
    return (
      <div className="signin">
        <h2> Wellcome back Mitey...</h2>
        <form>
          <input
            type="text"
            placeholder="Name..."
            onChange={this.setUserName}
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Password..."
            onChange={this.setUserPassword}
          />
          <br /> <br />
          <button type="button" onClick={this.logUser}>
            Log me in, Scottie!
          </button>
        </form>
      </div>
    );
  }
}
