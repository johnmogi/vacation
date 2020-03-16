import * as React from "react";
import { Component, ChangeEvent } from "react";
import Button from "@material-ui/core/Button";

import { UserModel, NewUserModel } from "../../models/user-model";
interface SignState {
  users: UserModel[];
  newUser: NewUserModel;
}

export class Register extends Component<any, SignState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      users: [],
      newUser: new NewUserModel()
    };
  }
  public componentDidMount(): void {
    fetch("http://localhost:3003/api/auth/users")
      .then(response => response.json())
      .then(users => this.setState({ users }))
      .catch(err => alert(err.message));
  }

  private setName = (args: ChangeEvent<HTMLInputElement>) => {
    const firstName = args.target.value;
    const newUser = { ...this.state.newUser };
    newUser.firstName = firstName;
    this.setState({ newUser });
  };

  private setLName = (args: ChangeEvent<HTMLInputElement>) => {
    const lastName = args.target.value;
    const newUser = { ...this.state.newUser };
    newUser.lastName = lastName;
    this.setState({ newUser });
  };

  private setUserName = (args: ChangeEvent<HTMLInputElement>) => {
    const userName = args.target.value;
    const newUser = { ...this.state.newUser };
    newUser.userName = userName;
    this.setState({ newUser });
  };

  private setUserPassword = (args: ChangeEvent<HTMLInputElement>) => {
    const password = args.target.value;
    const newUser = { ...this.state.newUser };
    newUser.password = password;

    this.setState({ newUser });
  };

  private addUserForm = () => {
    // const user = { ...this.state.newUser };
    // user.userId = this.state.selectedID;
    console.log(this.state.newUser);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify(this.state.newUser)
    };
    fetch("http://localhost:3003/api/auth/register", options)
      .then(response => response.json())
      .then(user => console.log("User has been added." + JSON.stringify(user)))
      .catch(err => alert(err.message));
  };

  render() {
    return (
      <div className="register">
        <h2> New here? Welcome aboard...</h2>
        <input
          id="firstName"
          type="text"
          onBlur={this.setName}
          value={this.state.newUser.firstName}
          placeholder="Enter Your Name"
        />
        <br /> <br />
        <input
          id="LastName"
          type="text"
          onBlur={this.setLName}
          value={this.state.newUser.lastName}
          placeholder="Your Family Name"
        />
        <br /> <br />
        <input
          id="userName"
          type="text"
          onBlur={this.setUserName}
          value={this.state.newUser.userName}
          placeholder="Set Desired User Name"
        />
        <br /> <br />
        <input
          id="pword"
          type="text"
          onBlur={this.setUserPassword}
          value={this.state.newUser.password}
          placeholder="Set Desired Password"
        />
        <br /> <br />
        <Button size="small" onClick={this.addUserForm}>
          Sign me up, Scottie!
        </Button>
        {/* <button type="button">Sign me up, Scottie!</button> */}
        <div className="admin">
          <h5>admin</h5>
          there are {this.state.users.length} user
        </div>
      </div>
    );
  }
}
