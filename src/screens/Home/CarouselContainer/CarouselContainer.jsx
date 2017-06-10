import React, { Component } from 'react';
import Carousel from './Carousel';
import api from '../../../utils/api';

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ title: 'title', description: 'desc', year: '1463', mins: 43, img: 'http://assets1.ignimgs.com/2016/05/24/overwatch1280jpg-6daa73_1280w.jpg' }],
    };
  }
  componentWillMount() {
    console.log(api);
  }
  getMovies = () => fetch('api')
    // sst movies
  handleItemClick = () => {

  }

  render() {
    return (
      <div>
        <Carousel
          movies={this.state.movies}
          onClickItem={this.handleItemClick}
        />
      </div>
    );
  }
}
export default CarouselContainer;
