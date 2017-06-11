import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
// TODO: add hover effect - darker background using Radium
const MovieSearchItem = ({ title, img, description }) => (
  <div style={styles.container}>
    <div style={{}}>
      <div style={{ fontWeight: 'bold', paddingBottom: '5px' }}>{title}</div>
      {description}
    </div>
    <img alt="img" src={img} />
  </div>
);

MovieSearchItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Radium(MovieSearchItem);
