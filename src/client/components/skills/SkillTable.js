import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export default class SkillTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tableRows = this.props.skills.map(skill => (
      <Table.Row key={skill.id}>
        <Table.Cell>{skill.name}</Table.Cell>
        <Table.Cell>{skill.description}</Table.Cell>
      </Table.Row>
    ));

    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Skill</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{tableRows}</Table.Body>
      </Table>
    );
  }
}