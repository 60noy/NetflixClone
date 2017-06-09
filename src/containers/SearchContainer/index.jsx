import React, { Component } from 'react';
import SearchBox from './SearchBox';
// import key from '../../utils/key';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      input: '',
    };
  }
  componentDidMount() {
    // this.fetchMoviesData();
  }
  fetchMoviesData = () => {
    // fetch(`${api}`);
  }

  // movieJSONToMovieObject = (movie) => {
  //
  // }
  handleInputChange = (input) => {
    this.setState({ input });
    console.log(`data ${input}`);
  }
  render() {
    return (
      <SearchBox
        text={this.state.input}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default SearchContainer;
