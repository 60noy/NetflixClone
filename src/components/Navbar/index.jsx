import React from 'react';
import { Menu } from 'semantic-ui-react';
import SearchContainer from '../../containers/SearchContainer';
import netflixLogo from './netflix_logo.png';

// const styles = {
//   container: {
//     width: '100',
//     display: 'flex',
//     backgroundColor: '#141414',
//   },
//   title: {
//     color: 'red',
//     fontSize: '3em',
//   },
// };

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
