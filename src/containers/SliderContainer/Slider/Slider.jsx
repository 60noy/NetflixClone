import React from 'react';
import PropTypes from 'prop-types';
import { Rating, Button } from 'semantic-ui-react';

const styles = {
  container: {

  },
  upper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  year: {
    fontSize: '1.4em',
    paddingRight: '1%',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '5em',
    marginTop: '4%',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.6em',
    marginTop: '4%',
    overflox: 'hidden',
    lineHeight: 1.4,
    alignContent: 'center',
    width: '36em',

  },
  btn: {
    paddingBottom: '6%',
    bottom: 0,
    position: 'absolute',
  },
  overlay: {
    background: '#000',
    opacity: 0.7,
    width: '100%',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
  },
};

const Slider = ({ img, title, description, rating, year, onClickWatch }) => (
  <div style={Object.assign({ backgroundImage: `url(${img})` }, styles.container)}>
    <div style={styles.overlay}>
      <div style={styles.upper}>
        <div style={styles.year}>
          {year}
        </div>
        <Rating icon="star" rating={rating} disabled maxRating={5} />
      </div>
      <div style={styles.center}>
        <div style={styles.title}>
          {title}
        </div>
        <div style={styles.description}>
          {description}
        </div>
      </div>
      <div style={styles.btn}>
        <Button onClick={() => console.log(onClickWatch, 'button')} color="red">
      Watch Trailer
    </Button>
      </div>
    </div>
  </div>
);

Slider.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onClickWatch: PropTypes.func.isRequired,
};

Slider.defaultProps = {

  seasons: 5,

};
export default Slider;
