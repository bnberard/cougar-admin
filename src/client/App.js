import React, { Component } from "react";
import "./app.css";
import {
  Container
} from "semantic-ui-react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from "./components/Navigation";
import Users from "./components/users/Users"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navigation />
        <Container style={{ marginTop: '7em' }}>
          <Switch>
              <Route exact path="/" component={Users} />
              <Route path="/Users" component={Users} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Projects" component={Projects} />
          </Switch>
        </Container>
        </BrowserRouter>
      </div>
    );
  }
}
