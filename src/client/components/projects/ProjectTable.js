import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export default class SkillTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.projects);
    const tableRows = this.props.projects.map(project => (
      <Table.Row key={project.id}>
        <Table.Cell>{project.name}</Table.Cell>
        <Table.Cell>{project.description}</Table.Cell>
        <Table.Cell>{project.startDate}</Table.Cell>
      </Table.Row>
    ));

    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{tableRows}</Table.Body>
      </Table>
    );
  }
}