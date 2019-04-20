import React, { Component } from 'react';
import {
  Grid, Header, Divider
} from 'semantic-ui-react';

import AddProjectForm from './AddProjectForm';
import ProjectTable from './ProjectTable'

import {fetchProjects, addProject} from '../../controllers/project-api'

export default class Projects extends Component {
  constructor(props)
    {
        super(props);
        this.state = {
            projects:[]
        }
    }

    addProject = async (project) =>
    {
        let newProject = await addProject(project);

        let projects= this.state.projects;

        projects.push(newProject.data);

        console.log(projects);

        this.setState({projects: projects});
    }

    async componentDidMount() {
        let projects = await fetchProjects();

        this.setState({projects});
    }

  render() {
    return (
      <div>
        <AddProjectForm addProject={this.addProject}/>
        <Divider />
        <ProjectTable projects={this.state.projects} />
      </div>
    );
  }
}
