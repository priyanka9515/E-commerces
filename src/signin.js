import React from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
class Contact extends React.Component {
  render() {
    return (
      <div className="body">
        <Form className="signin">
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label>password</Label>
            <Input type="password" placeholder="password" />
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
