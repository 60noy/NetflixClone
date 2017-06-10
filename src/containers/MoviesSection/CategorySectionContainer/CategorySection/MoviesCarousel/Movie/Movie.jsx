import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ title }) => (
  <div >
  hey {title}
  </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  // img: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // year: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};
export default Movie;
