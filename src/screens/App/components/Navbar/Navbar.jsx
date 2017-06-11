import React from 'react';
import { Menu } from 'semantic-ui-react';
import SearchContainer from '../../../Home/containers/SearchContainer';
import netflixLogo from '../../../../images/logo.png';

const Navbar = () => (
  <div >
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
  </div>
);

export default Navbar;
