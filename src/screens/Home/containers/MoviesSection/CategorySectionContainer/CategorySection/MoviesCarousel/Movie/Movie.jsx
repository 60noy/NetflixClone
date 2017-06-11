import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Rating } from 'semantic-ui-react';

const styles = {
  container: {
    width: '100%',
    height: '100%',

    ':hover': {
      backgroundColor: '#000',
      opacity: 0.8,
      cursor: 'pointer',
      color: '#E0E0E0',
    },
    color: 'transparent',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.4em',
    marginTop: '1em',
  },
  year: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2em',
    color: '#E0E0E0',
    paddingTop: '8px',
  },
};

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('update');
    if (this.state.hovered === nextState.hovered) {
      console.log(`hoveredStt ${this.state.hovered}`);
      console.log(`nextHovered ${nextState.hovered}`);
      return false;
    }

    return true;
  }
  makeHover = () => {
    let hovered = this.state;
    if (hovered === false) {
      hovered = true;
      this.setState({ hovered });
    }
  }
  removeHover = () => {
    let hovered = this.state;
    if (hovered) {
      hovered = false;
      this.setState({ hovered });
    }
  }

  render() {
    const { title, rating, year } = this.props;
    return (
      <div
        style={styles.container}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        {this.state.hovered &&
          <div style={styles.wrapper}>
            <Rating disabled rating={Math.round(rating)} maxRating={5} icon="star" />
            <div style={styles.title}>
              {title}
            </div>
            <div style={styles.year}>
              {year}
            </div>

          </div>}
      </div>

    );
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};
export default Radium(Movie);
