import React from 'react';
import PropTypes from 'prop-types';
import MoviesCarousel from './MoviesCarousel';

const styles = {
  title: {
    paddingTop: '2%',
    paddingBottom: '4%',
    fontSize: '2.4em',
    paddingLeft: '4%',
  },

};

const CategorySection = ({ title, movies }) => (
  <div>
    <div style={styles.title}>
      {title}
    </div>
    <div>
      <MoviesCarousel movies={movies} />
    </div>
  </div>
);

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

CategorySection.defaultProps = {
  title: 'default',
  movies: [{ title: 'noy', year: 2014, img: 'sa', rating: 4 }],
};
export default CategorySection;
