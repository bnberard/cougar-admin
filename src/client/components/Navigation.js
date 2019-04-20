import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import {
  Container,
  Dropdown,
  Image,
  Menu
} from 'semantic-ui-react';

export default class Navigation extends Component {
  render() {
    return (
      <Menu fixed="top" inverted>
          <Container>
            <Menu.Item>
              <Image
                size="mini"
                src="https://www.massmutual.com/global-images/favicons/apple-touch-icon.png"
                style={{ marginRight: "1.5em" }}
              />
              TypeScript Demo
            </Menu.Item>

            <Menu.Item as="a"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item as="a"><Link to="/users">Users</Link></Menu.Item>
          <Menu.Item as="a"><Link to="/skills">Skills</Link></Menu.Item>
          <Menu.Item as="a"><Link to="/projects">Projects</Link></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
