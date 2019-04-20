import React, { Component } from "react";
import {Form, Header} from 'semantic-ui-react';

export default class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      jobRole: '',
      careerYears: 0
    };
  }

  handleSubmit = (e) =>
  {
    let user =
    {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      jobRole: this.state.jobRole,
      careerYears: this.state.careerYears
    }

    this.props.addUser(user);
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    return (
      <Form>
      <Header as="h2">Add User:</Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First name"
            placeholder="First name"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <Form.Input
            fluid
            label="Last name"
            placeholder="Last name"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <Form.Input
            fluid
            label="Job Role"
            placeholder="Job Role"
            name="jobRole"
            onChange={this.handleChange}
            value={this.state.jobRole}
          />
          <Form.Input
            fluid
            label="Years Experience"
            name="careerYears"
            type='number'
            onChange={this.handleChange}
            value={this.state.careerYears}
          />
        </Form.Group>
        <Form.Button onClick={this.handleSubmit}>Add User</Form.Button>
      </Form>
    );
  }
}
