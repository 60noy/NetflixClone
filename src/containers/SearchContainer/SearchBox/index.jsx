import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'semantic-ui-react';

const SearchBox =
 ({ onChange, isLoading, value, onResultSelect, resultRenderer, results }) => (
   <Search
     placeholder="hello world"
     onSearchChange={(e, data) => onChange(data)}
     icon="search"
     loading={isLoading}
     value={value}
     onResultSelect={(e, result) => onResultSelect(result)}
     resultRenderer={resultRenderer}
     results={results}
   />
);

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  onResultSelect: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  resultRenderer: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,

};
export default SearchBox;
