import React, { Component } from 'react';
import {
  Grid, Header, Divider
} from 'semantic-ui-react';

import AddUserForm from './AddUserForm';
import UserTable  from './UserTable';
import UserCard from './UserCard';

import {fetchUsers, fetchUser, addUser, addUserSkill} from '../../controllers/user-api';

export default class Users extends Component {
  constructor(props)
    {
        super(props);
        this.state = 
        {
            users: [],
            currentUser: {}
        }
    }

    async componentDidMount() {
        let users = await fetchUsers();
        console.log(users.data)
        this.setState({users: users.data});
    }

  viewUserDetail = async (id) =>
    {
      let user = await fetchUser(id);

      this.setState({currentUser: user.data});
    }

    addUser = async (user) =>
    {
      let newUser = await addUser(user);

      let users= this.state.users;

      users.push(newUser.data);

      this.setState({users});
    }

    addUserSkill = async (skill) =>
    {
      let updatedUser = await addUserSkill(this.state.currentUser.id, skill);

      this.setState({currentUser: updatedUser.data});
    }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={10} textAlign="left">
            <AddUserForm addUser={this.addUser}/>
            <Divider />
            <UserTable viewDetail={this.viewUserDetail} users={this.state.users}></UserTable>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
              <Header as="h2">Current User:</Header>
              {this.state.currentUser && this.state.currentUser.id ? <UserCard addUserSkill={this.addUserSkill} currentUser={this.state.currentUser}/> : <Header as="h4">No User Loaded</Header>}
          </Grid.Column>
        </Grid> 
      </div>
    );
  }
}
