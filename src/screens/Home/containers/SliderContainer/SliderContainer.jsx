import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '../../components/Slider';
/* eslint-disable no-debugger */

class SliderContainer extends Component {
  // navigates to trailers page
  handleWatchTrailer = () => {
    // push movie/id
  }
  render() {
    const movie = this.props.movie;
    const { overview, img, title, year, rating } = movie;
    return (
      <div>
        <Slider
          img={img}
          title={title}
          description={overview}
          year={year}
          rating={rating}
          onClickWatch={this.handleWatchTrailer}
        />
      </div>
    );
  }
}
SliderContainer.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
export default SliderContainer;
