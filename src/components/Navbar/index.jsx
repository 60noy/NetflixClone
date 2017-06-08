import React from 'react';
import PropTypes from 'prop-types';
import SearchContainer from '../../containers/SearchContainer';

const Navbar = ({ movies }) => (
  <div>
    <SearchContainer movies={movies} />
  </div>
);

Navbar.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default Navbar;
