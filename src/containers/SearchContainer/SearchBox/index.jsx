import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ text }) => (
  <input type="text" value={text} />
);

export default SearchBox;

SearchBox.propTypes = {
  text: PropTypes.string.isRequired,
};
