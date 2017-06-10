import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Movie from './Movie';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  accessibilitY: true,
};
const movieRenderer = movie => (
  <div key={movie.id} style={{ backgroundImage: `url(${movie.img})`, height: '200px' }}>
    <Movie
      title={movie.title}
      img={movie.img}
      rating={movie.rating}
      year={movie.year}
    />
  </div>
  );
  // <div>hi {movie}</div>

const MoviesCarousel = ({ movies }) => (
  <Slider
    {...settings}
    slidesToScroll={3}
    slidesToShow={10}
    arrows
  >
    {movies.map(movieRenderer) || <div />}
  </Slider>
  );


MoviesCarousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
export default MoviesCarousel;
