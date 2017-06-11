import React from 'react';
import PropTypes from 'prop-types';
import MoviesCarousel from './MoviesCarousel';

const styles = {
  name: {
    paddingTop: '2%',
    paddingBottom: '2%',
    fontSize: '2.4em',
    paddingLeft: '4%',
  },
  moviesRow: {
    marginBottom: '2%',
  },

};

const CategorySection = ({ name, movies }) => (
  <div>
    <div style={styles.name}>
      {name}
    </div>
    <div style={styles.moviesRow}>
      <MoviesCarousel movies={movies} />
    </div>
  </div>
);

CategorySection.propTypes = {
  name: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default CategorySection;
