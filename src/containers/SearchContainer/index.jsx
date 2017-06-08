import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
    };
  }
  render() {
    return (
      <div>
        <SearchBox text={this.state.movies} />
      </div>

    );
  }
}

SearchContainer.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default SearchContainer;
