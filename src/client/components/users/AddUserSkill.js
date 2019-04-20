import React, {Component} from 'react';
import {
    Search
} from 'semantic-ui-react';
import { searchSkills } from '../../controllers/skill-api';

export default class SkillSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false, results: [], value: ''
        };
    };

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => {
        console.log(result);
        this.props.addUserSkill(result.id);
    }

    handleSearchChange = async (e, { value }) => {
        this.setState({  value })
        this.setState({ isLoading: true })
        let response = await searchSkills(value);
        if(response){
            var results = new Array();
            response.data.forEach(function(ele){
                results.push({"id": ele.id, "title": ele.name, "description" : ele.description});
            });
            this.setState({results: results});
        }
        this.setState({ isLoading: false });
    }
    
    render() {
        return (<div>
                  <Search
                      title="Search Skills"
                      input={{ icon: 'search', iconPosition: 'left' }}
                      loading={this.state.isLoading}
                      onResultSelect={this.handleResultSelect}
                      onSearchChange={this.handleSearchChange}
                      results={this.state.results}
                      value={this.state.value}
                    />
            </div>
        );
    }
}