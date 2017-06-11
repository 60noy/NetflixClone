// default screen with navbar
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';

const App = props => (
  <div>
    <Navbar />
    {props.children}
  </div>
);
App.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export default App;
