import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {

  },
  upper: {

  },
  year: {

  },
  mins: {

  },
  center: {

  },
  title: {

  },
  description: {

  },
};

const Slider = ({ img, title, description, year, mins }) => (
  <div style={styles.container}>
    {img}
    <div style={styles.upper}>
      <div style={styles.year}>
        {year}
      </div>
      <div style={styles.mins}>
        {mins}
      </div>
    </div>
    <div style={styles.center}>
      <div style={styles.title}>
        {title}
      </div>
      <div style={styles.description}>
        {description}
      </div>
    </div>
  </div>
);

Slider.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  mins: PropTypes.number.isRequired,
};

Slider.defaultProps = {
  img: 'http://assets1.ignimgs.com/2016/05/24/overwatch1280jpg-6daa73_1280w.jpg',
  title: 'Overwatch',
  description: 'Tracer is here!',
  year: '1996',
  mins: 146,
};
