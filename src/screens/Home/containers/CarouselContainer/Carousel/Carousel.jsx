import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import SliderContainer from './SliderContainer';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoscroller: true,
  fade: true,
  draggable: false,
  autoplay: true,
};
const Carousel = ({ movies }) => (
  <Slider {...settings}>
    {movies.map(movie =>
        (
          <div>
            <SliderContainer
              movie={movie}
            />
          </div>
      ),
      )}
  </Slider>
);

Carousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  })).isRequired,
};
export default Carousel;
