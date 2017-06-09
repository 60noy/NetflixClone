import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      formattedMovies: [],
      inputText: '',
    };
  }
  render() {
    return (
      <div>
        <Navbar
          searchText={this.state.inputText}
          movies={this.state.data}
        />
      </div>
    );
  }
}


export default NavbarContainer;
