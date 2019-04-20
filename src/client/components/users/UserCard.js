import React, {Component} from 'react'
import {Card, Icon, Header, Label, Image} from 'semantic-ui-react'

import AddUserSkill from './AddUserSkill';

export default class UserCard extends Component {
    constructor(props)
    {
        super(props);
    }

    render(){
            const skills = this.props.currentUser ? this.props.currentUser.skills.map(skill =>
                {
                    return(
                        <Label as='a'>{skill.name}<Icon name='delete' /></Label>
                    )
                }) : [];

                // const projects = this.state.projects.map(project =>
                //     {
                //         return(
                //             <Label as='a'>{project.name}<Icon name='delete' /></Label>
                //         )
                //     })
            return(        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
        <Card.Header>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</Card.Header>
        <Card.Meta>Role: {this.props.currentUser.jobRole}</Card.Meta>
        <Card.Meta>Years Experience: {this.props.currentUser.careerYears}</Card.Meta>
        </Card.Content>
    <Card.Content extra>
      <Header as="h4">Skills</Header>
        {skills}
    </Card.Content>
    <Card.Content extra>
      <Header as="h4">Add Skills</Header>
       <AddUserSkill addUserSkill={this.props.addUserSkill} />
    </Card.Content>
  </Card>
    )
    }
}