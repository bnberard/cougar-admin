import React, { Component } from 'react';
import AddUserForm from './AddUserForm';
import UserTable from './UserTable';
import {fetchUsers} from "../../controllers/user-api";

export default class UsersList extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            users: []
        }
    }

    async componentDidMount() {
        let users = await fetchUsers();
        console.log(users.data)
        this.setState({users: users.data});
    }

  render() {
    return (
      <div>
        <AddUserForm />
        <UserTable users={this.state.users}></UserTable>
      </div>
    );
  }
}
