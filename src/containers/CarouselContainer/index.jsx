import React, { Component } from 'react';
import Carousel from './Carousel';
import api from '../../utils/api';

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentWillMount() {
    console.log(api);
  }
  getMovies = () => fetch('api')
    // sst movies


  render() {
    return (
      <div>
        <Carousel movies={this.state.movies} />
      </div>
    );
  }
}
export default CarouselContainer;
