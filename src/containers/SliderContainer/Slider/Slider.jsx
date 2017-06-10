import React from 'react';
import PropTypes from 'prop-types';
import { Rating, Button } from 'semantic-ui-react';

const styles = {
  container: {
    minHeight: '60vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    filter: 'brightness(70%)',
    color: '#fff',
  },
  upper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  year: {
    fontSize: '1.4em',
  },
  mins: {
    fontSize: '1.4em',
    marginLeft: '1%',
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
    marginTop: '6%',
    overflox: 'hidden',
    lineHeight: 1.4,
    alignContent: 'center',
    width: '36em',

  },
};

const Slider = ({ img, title, description, rating, year, mins, seasons, type, onClickWatch }) => (
  <div style={Object.assign({ backgroundImage: `url(${img})` }, styles.container)}>
    <div style={styles.upper}>
      <div style={styles.year}>
        {year}
      </div>
      <div style={styles.mins}>
        {type === 'TVSHOW' ? ` ${seasons} seasons` : ` ${mins} MINS`}
      </div>
      <Rating icon="star" defaultRating={rating} disabled />
    </div>
    <div style={styles.center}>
      <div style={styles.title}>
        {title}
      </div>
      <div style={styles.description}>
        {description}
      </div>
    </div>
    <div style={{ padding: '2em' }}>
      <Button onClick={() => onClickWatch} color="red">
      Watch Trailer
    </Button>
    </div>
  </div>
);

Slider.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  mins: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  seasons: PropTypes.number,
  type: PropTypes.oneOf(['TVSHOW', 'MOVIE']),
  onClickWatch: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  img: 'http://assets1.ignimgs.com/2016/05/24/overwatch1280jpg-6daa73_1280w.jpg',
  title: 'Overwatch',
  description: 'Tracer is here!',
  year: '1996',
  mins: 146,
  seasons: 5,
  type: 'TVSHOW',

};
export default Slider;
