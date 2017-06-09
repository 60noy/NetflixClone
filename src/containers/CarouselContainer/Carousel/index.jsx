import React from 'react';
import PropTypes from 'prop-types';
import { ReactCarousel } from 'react-responsive-carousel';
import Slider from '../../../components/Slider';

const Carousel = ({ movies }) => (
  <ReactCarousel>
    {movies.map(movie =>
        (<Slider
          title={movie.title}
          description={movie.description}
          year={movie.year}
          mins={movie.mins}
          img={movie.img}
        />),
      )
    })
    </ReactCarousel>);

Carousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    mins: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
};
export default Carousel;
