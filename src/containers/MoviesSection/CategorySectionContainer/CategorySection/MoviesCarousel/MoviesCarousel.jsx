import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Movie from './Movie';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
};
const movieRenderer = movie => (
  <div>
    <Movie
      title={movie.title}
      img={movie.img}
      rating={movie.rating}
      year={movie.year}
      key={movie.id}
    />
  </div>
  );
  // <div>hi {movie}</div>

const MoviesCarousel = ({ movies }) => {
  console.log(`movies lenghth${movies}`);
  return (
    <Slider {...settings} slidesToScroll={4} >
      {movies.map(movieRenderer) || <div />}
    </Slider>
  );
};


MoviesCarousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.string,
  })).isRequired,
};
export default MoviesCarousel;
