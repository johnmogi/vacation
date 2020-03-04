import * as React from "react";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <Form>
          <Form.Group controlId="formBasicUser">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="email" placeholder="Enter User Name" />
            <Form.Text className="text-muted">
              enter your username pretty please...
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
