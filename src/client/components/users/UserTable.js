import React, { Component } from "react";
import { Table, Header, Button, Icon } from "semantic-ui-react";

export default class UserTable extends Component {
    constructor(props)
    {
        super(props);
    }
    
  render() {
    const tableRows = this.props.users.map(user => (
      <Table.Row key={user.id}>
        <Table.Cell>{user.firstName}</Table.Cell>
        <Table.Cell>{user.lastName}</Table.Cell>
        <Table.Cell>{user.jobRole}</Table.Cell>
        <Table.Cell>
          <Button.Group>
            <Button icon onClick={(id) => {this.props.viewDetail(user.id)}}>
              <Icon name='magnify' />
            </Button>
            <Button icon>
              <Icon name='trash' />
            </Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    ));

    return (
      <div>
      <Header as="h2">User List:</Header>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{tableRows}</Table.Body>
      </Table>
      </div>
    );
  }
}
