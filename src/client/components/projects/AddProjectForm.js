import React, { Component } from "react";
import {Form, Header} from 'semantic-ui-react';
import {DateInput} from "semantic-ui-calendar-react";

export default class AddProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      startDate: ''
    };
  }

  handleSubmit = () =>
  {
    let project = {
      name: this.state.name,
      description: this.state.description,
      startDate: this.state.startDate
    }

    this.props.addProject(project);
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    handleDateChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
      }
    };

  render() {
    return (
      <Form>
      <Header as="h2">Add Project</Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Project Name"
            placeholder="Project Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Form.Input
            fluid
            label="Project Description"
            placeholder="Project Description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <DateInput
            fluid
            label="Start Date"
            name="startDate"
            onChange={this.handleDateChange}
            value={this.state.startDate}
          />
        </Form.Group>
        <Form.Button onClick={this.handleSubmit}>Add Project</Form.Button>
      </Form>
    );
  }
}
