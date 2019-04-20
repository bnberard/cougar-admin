import React, { Component } from 'react';
import {
  Grid, Header, Divider
} from 'semantic-ui-react';
import AddSkillForm from './AddSkillForm';
import SkillTable from './SkillTable';
import { fetchSkills, addSkill } from '../../controllers/skill-api';

export default class Skills extends Component {
  constructor(props)
    {
        super(props);
        this.state = 
        {
            skills: []
        }
    }

    addSkill = async (skill) =>
    {
        let newSkill = await addSkill(skill);

        let skills = this.state.skills;
        
        skills.push(newSkill.data);

        this.setState(skills);
    }

    async componentDidMount() {
        let skills = await fetchSkills();

        this.setState({skills: skills.data});
    }

  render() {
    return (
      <div>
        <AddSkillForm addSkill={this.addSkill}/>
        <Divider />
        <SkillTable skills={this.state.skills} />
      </div>
    );
  }
}
