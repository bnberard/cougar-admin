import React, { Component } from "react";
import {Form, Header} from 'semantic-ui-react';

export default class AddSkillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
  }

  handleSubmit = () =>
  {
    let skill = {
      name: this.state.name,
      description: this.state.description
    }

    this.props.addSkill(skill);
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    return (
      <Form>
        <Header as="h2">Add Skill</Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Skill Name"
            placeholder="Skill"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Form.Input
            fluid
            label="Description"
            placeholder="What kind of skill is?"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </Form.Group>
        <Form.Button onClick={this.handleSubmit}>Add Skill</Form.Button>
      </Form>
    );
  }
}
