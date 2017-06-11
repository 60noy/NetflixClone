import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Rating } from 'semantic-ui-react';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    ':hover': {
      backgroundColor: '#000',
      opacity: 0.8,
      cursor: 'pointer',
    },
  },
  title: {
    fontSize: '1.4em',
    marginTop: '1em',
  },
  year: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8em',
    color: '#E0E0E0',
    paddingTop: '8px',
  },
};
const Movie = ({ title, rating, year }) => (
  <div style={styles.container}>
    <Rating disabled rating={Math.round(rating)} maxRating={5} icon="star" />
    <div style={styles.title}>
      {title}
      <div style={styles.year}>
        {year}
      </div>
    </div>
  </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};
export default Radium(Movie);
