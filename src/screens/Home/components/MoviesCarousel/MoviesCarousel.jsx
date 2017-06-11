import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Radium from 'radium';
import Movie from '../Movie';

const styles = {
  container: {
    height: '200px',
  },
  overlay: {
    width: '100%',
    height: '100%',
    ':hover': {
      opacity: 0.8,
      background: '#000',
      width: '100%',
      height: '100%',
    },
  },
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  accessibilitY: true,
};
const movieRenderer = movie => (
  <div key={movie.id} style={Object.assign({ backgroundImage: `url(${movie.img})` }, styles.container)}>
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
    slidesToScroll={4}
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
export default Radium(MoviesCarousel);
