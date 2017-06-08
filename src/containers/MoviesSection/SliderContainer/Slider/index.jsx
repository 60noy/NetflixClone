import React from 'react';
import PropTypes from 'prop-types';

let bgImg = '';
const styles = {
  container: {
    width: '100%',
    heigth: '70%',
    background: `url(${bgImg}) center no-repeat`,
  },
  uppper: {

  },
  year: {

  },
};

const Slider = ({ img, title, description, year, mins }) => {
  bgImg = () => img(<div style={[styles.container]}>
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
  </div>);
};

export default Slider;

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
