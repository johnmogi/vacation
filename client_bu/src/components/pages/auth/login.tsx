import * as React from "react";
import { Component, ChangeEvent } from "react";

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
  public testClick() {
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


  private checkUserName = (args: ChangeEvent<HTMLInputElement>) => {
    const userName = args.target.value;
    const user = { ...this.state.user };
    user.userName = userName;
    this.setState({ user });

  };

  private checkPassword = (args: ChangeEvent<HTMLInputElement>) => {
    const password = args.target.value;
    const user = { ...this.state.user };
    user.password = password;
    this.setState({ user });

  };
  

  render() {
    return (
      <div className="signin">
        <h2> Wellcome back Mitey...</h2>
        <form>
     
           <input
                type="text"
                onChange={this.checkUserName}
                placeholder="Enter Your User Name"
              />
          <br /> <br />
          <input type="text" placeholder="Password"   onChange={this.checkPassword}
               />
          <br /> <br />
          <button type="button" onClick={this.testClick}>
            Log me in, Scottie!
          </button>
        </form>
      </div>
    );
  }
}
