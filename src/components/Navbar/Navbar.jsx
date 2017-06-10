import React from 'react';
import { Menu } from 'semantic-ui-react';
import SearchContainer from '../../containers/SearchContainer';
import netflixLogo from './netflix_logo.png';

const Navbar = () => (
  <Menu>
    <Menu.Item>
      <img src={netflixLogo} alt="netflix logo" />
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <SearchContainer />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
