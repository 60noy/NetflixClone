import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Slider from './Slider';
import key from '../../utils/key';
/* eslint-disable no-debugger */

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieID: this.props.movieID,
      movie: {},
      type: this.props.type,
    };
  }
  componentDidMount() {
    if (this.props.type === 'TVSHOW') {
      this.fetchImageFromTvShowID(this.props.movieID);
    } else {
      this.fetchImageFromMovieID(this.props.movieID);
    }
  }
  fetchImageFromTvShowID = (id) => {
    console.log(`id ${id}`);
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`)
    .then(data => data.json())
    .then((data) => {
      const movie = {
        id,
        type: 'TVSHOW',
        img: `http://image.tmdb.org/t/p/original/${data.backdrop_path}`,
        title: data.name,
        description: data.overview,
        rating: data.vote_average,
        seasons: data.seasons.length,
        year: moment(data.last_air_date, 'YYYY-MM-DD').format('YYYY'),
      };
      this.setState({ movie });
    });
    // fetch(`${ID}`)....
  }
  fetchImageFromMovieID = (id) => {
    console.log(`id ${id}`);
    fetch(`https://api.themoviedb.org/3/movie/${id}?apikey=${key}`)
    .then(data => data.json())
    .then((data) => {
      // TODO: change mins to the real api minutes variables,
      //  I added mins without checking how it is declared
      const movie = {
        id,
        type: 'MOVIE',
        img: `http://image.tmdb.org/t/p/original/${data.backdrop_path}`,
        title: data.name,
        description: data.overview,
        rating: data.vote_average,
        mins: data.mins,
        year: moment(data.last_air_date, 'YYYY-MM-DD').format('YYYY'),
      };
      this.setState({ movie });
    });
  }
  // navigates to trailers page
  handleWatchTrailer = () => {
    // push movie/id
  }
  render() {
    const movie = this.state.movie;
    const { description, img, title, year, rating, mins, seasons } = movie;
    return (
      <div>
        <Slider
          img={img}
          title={title}
          description={description}
          year={year}
          rating={rating}
          seasons={seasons}
          mins={mins}
          onClickWatch={this.handleWatchTrailer}
        />
      </div>
    );
  }
}
SliderContainer.propTypes = {
  movieID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default SliderContainer;
