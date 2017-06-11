import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import moviesAndTvShows from '../../../../utils/carouselMoviesAndShows';
import Carousel from './Carousel';
// header carousel
class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.formatMoviesAndShows(),
    };
  }
  // componentDidMount() {
  //   this.addMoviesAndTvShowsType();
  // }
  formatMoviesAndShows = () => {
    const formattedMovies = [];
    _.forEach(moviesAndTvShows, (movie) => {
      const type = movie.release_date ? 'MOVIE' : 'TVSHOW';
      formattedMovies.push({
        ...movie,
        title: type === 'MOVIE' ? movie.title : movie.name,
        img: `http://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
        year: type === 'MOVIE' ? moment(movie.release_date, 'YYYY-MM-DD').format('YYYY') : moment(movie.first_air_date, 'YYYY-MM-DD').format('YYYY'),
        rating: Math.round(movie.vote_average / 2),
      });
    });

    return formattedMovies;
  }
  render() {
    const { movies } = this.state;
    return (
      <div>
        <Carousel movies={movies} />
      </div>
    );
  }
}

export default CarouselContainer;
