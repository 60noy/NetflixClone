import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ name, description, img, rating, year }) => (
  <div>
  name {name}
  description {description}
  img {img}
  rating {rating}
  year {year}
  </div>
);

export default Movie;

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
