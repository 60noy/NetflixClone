import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'semantic-ui-react';

const SearchBox = ({ text, onChange }) => (
  <Search
    placeholder="hello world"
    defaultValue={text}
    onSearchChange={(e, data) => onChange(data)}
    icon="search"
  />
);

SearchBox.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchBox;
